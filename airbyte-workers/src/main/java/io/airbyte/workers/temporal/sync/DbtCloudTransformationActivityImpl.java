/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.workers.temporal.sync;

import io.airbyte.config.OperatorDbtCloud;
import io.airbyte.workers.helper.DbtCloudClient;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class DbtCloudTransformationActivityImpl implements DbtCloudTransformationActivity {

  private final DbtCloudClient client;

  public DbtCloudTransformationActivityImpl(final DbtCloudClient client) {
    this.client = client;
  }

  @Override
  public void runDbtCloud(final OperatorDbtCloud input) {
    this.client.triggerRun(input.getDbtWorkflowId());
    // log(response);
  }

}
