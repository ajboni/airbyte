import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useMemo, useRef } from "react";
import { FormattedMessage } from "react-intl";
import { useToggle, useUpdateEffect } from "react-use";

import { TextInputContainer, TextInputContainerProps } from "../TextInputContainer";
import styles from "./SecretTextArea.module.scss";

interface SecretTextAreaProps
  extends Omit<TextInputContainerProps, "onFocus" | "onBlur">,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const SecretTextArea: React.VFC<SecretTextAreaProps> = ({
  name,
  disabled,
  value,
  onChange,
  onMouseUp,
  onBlur,
  error,
  light,
  ...textAreaProps
}) => {
  const hasValue = useMemo(() => !!value && String(value).trim().length > 0, [value]);
  const [isContentVisible, toggleIsContentVisible] = useToggle(!hasValue);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const textAreaHeightRef = useRef<number>((textAreaProps.rows || 1) * 20);

  useUpdateEffect(() => {
    if (isContentVisible && textAreaRef.current) {
      textAreaRef.current.focus();
      const selectionStart = value ? String(value).length : 0;
      textAreaRef.current.setSelectionRange(selectionStart, selectionStart);
    }
  }, [isContentVisible]);

  return (
    <TextInputContainer disabled={disabled} error={error} light={light}>
      {isContentVisible ? (
        <textarea
          spellCheck={false}
          {...textAreaProps}
          className={classNames(styles.textarea, textAreaProps.className)}
          name={name}
          disabled={disabled}
          ref={textAreaRef}
          onChange={(event) => {
            onChange?.(event);
          }}
          onMouseUp={(event) => {
            textAreaHeightRef.current = textAreaRef.current?.offsetHeight ?? textAreaHeightRef.current;
            onMouseUp?.(event);
          }}
          onBlur={(event) => {
            textAreaHeightRef.current = textAreaRef.current?.offsetHeight ?? textAreaHeightRef.current;
            if (hasValue) {
              toggleIsContentVisible();
            }
            onBlur?.(event);
          }}
          style={{ height: textAreaHeightRef.current }}
          value={value}
        />
      ) : (
        <>
          <button
            type="button"
            className={styles.toggleVisibilityButton}
            onClick={() => {
              toggleIsContentVisible();
            }}
            style={{
              height: textAreaHeightRef.current,
            }}
            disabled={disabled}
          >
            <FormattedMessage id="ui.secretTextArea.hidden" /> <FontAwesomeIcon icon={faEye} fixedWidth />
          </button>
          <input
            type="password"
            name={name}
            disabled={disabled}
            value={value}
            className={styles.passwordInput}
            aria-hidden
            onChange={() => {
              // eslint-disable-next-line @typescript-eslint/no-empty-function
            }}
          />
        </>
      )}
    </TextInputContainer>
  );
};
