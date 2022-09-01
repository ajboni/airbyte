import { FormikHelpers } from "formik";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

import { DropDownRow } from "components";

import { ConnectionScheduleType, WebBackendConnectionRead } from "core/request/AirbyteClient";
import { useGetDestinationDefinitionSpecification } from "services/connector/DestinationDefinitionSpecificationService";
import { useCurrentWorkspaceId } from "services/workspaces/WorkspacesService";
import { createFormErrorMessage } from "utils/errorStatusMessage";
import { ConnectionFormMode, ConnectionFormSubmitResult } from "views/Connection/ConnectionForm/ConnectionForm";
import {
  ConnectionFormValues,
  connectionValidationSchema,
  FormikConnectionFormValues,
  mapFormPropsToOperation,
  useFrequencyDropdownData,
  useInitialValues,
} from "views/Connection/ConnectionForm/formConfig";

import { useFormChangeTrackerService, useUniqueFormId } from "../FormChangeTracker";
import { ModalCancel } from "../Modal";

export type ConnectionOrPartialConnection =
  | WebBackendConnectionRead
  | (Partial<WebBackendConnectionRead> & Pick<WebBackendConnectionRead, "syncCatalog" | "source" | "destination">);

export interface ConnectionServiceProps {
  connection: ConnectionOrPartialConnection;
  mode: ConnectionFormMode;
  formId?: string;
  onSubmit: (values: ConnectionFormValues) => Promise<ConnectionFormSubmitResult | void>;
  onAfterSubmit?: () => void;
  onFrequencySelect?: (item: DropDownRow.IDataItem) => void;
  onCancel?: () => void;
}

const useConnectionForm = ({
  connection,
  mode,
  formId,
  onSubmit,
  onAfterSubmit,
  onFrequencySelect,
  onCancel,
}: ConnectionServiceProps) => {
  const [submitError, setSubmitError] = useState<Error | null>(null);
  const workspaceId = useCurrentWorkspaceId();
  const { clearFormChange } = useFormChangeTrackerService();
  formId = useUniqueFormId(formId);

  const destDefinition = useGetDestinationDefinitionSpecification(connection.destination.destinationDefinitionId);
  const initialValues = useInitialValues(connection, destDefinition, mode !== "create");

  const onFormSubmit = useCallback(
    async (values: FormikConnectionFormValues, formikHelpers: FormikHelpers<FormikConnectionFormValues>) => {
      // Set the scheduleType based on the schedule value
      values["scheduleType"] = values.scheduleData?.basicSchedule
        ? ConnectionScheduleType.basic
        : ConnectionScheduleType.manual;

      const formValues: ConnectionFormValues = connectionValidationSchema.cast(values, {
        context: { isRequest: true },
      }) as unknown as ConnectionFormValues; // TODO: We should align these types

      formValues.operations = mapFormPropsToOperation(values, connection.operations, workspaceId);

      setSubmitError(null);
      try {
        await onSubmit(formValues);

        formikHelpers.resetForm({ values });
        if (formId) {
          // formId is never undefined here, but this is safer than `!`
          clearFormChange(formId);
        } else {
          // This should never be hit.
          throw new Error("Somehow this form does not have an id");
        }

        onAfterSubmit?.();
      } catch (e) {
        if (!(e instanceof ModalCancel)) {
          setSubmitError(e);
        }
      }
    },
    [connection.operations, workspaceId, onSubmit, clearFormChange, formId, onAfterSubmit]
  );

  const errorMessage = useMemo(() => (submitError ? createFormErrorMessage(submitError) : null), [submitError]);
  const frequencies = useFrequencyDropdownData(connection.scheduleData);

  return {
    initialValues,
    destDefinition,
    connection,
    mode,
    errorMessage,
    frequencies,
    formId,
    onFormSubmit,
    onAfterSubmit,
    onFrequencySelect,
    onCancel,
  };
};

const ConnectionFormContext = createContext<ReturnType<typeof useConnectionForm> | null>(null);

export const ConnectionFormServiceProvider: React.FC<ConnectionServiceProps> = ({ children, ...props }) => {
  const data = useConnectionForm(props);
  return <ConnectionFormContext.Provider value={data}>{children}</ConnectionFormContext.Provider>;
};

export const useConnectionFormService = () => {
  const context = useContext(ConnectionFormContext);
  if (context === null) {
    throw new Error("useConnectionFormService must be used within a ConnectionFormProvider");
  }
  return context;
};
