/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.db.instance.configs.migrations;

import org.flywaydb.core.api.migration.BaseJavaMigration;
import org.flywaydb.core.api.migration.Context;
import org.jooq.DSLContext;
import org.jooq.impl.DSL;
import org.jooq.impl.SQLDataType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

// TODO: update migration description in the class name
public class V0_40_4_001__AddDbtCloudOperationToConfigs extends BaseJavaMigration {

  private static final Logger LOGGER = LoggerFactory.getLogger(V0_40_4_001__AddDbtCloudOperationToConfigs.class);

  @Override
  public void migrate(final Context context) throws Exception {
    LOGGER.info("Running migration: {}", this.getClass().getSimpleName());
    final DSLContext ctx = DSL.using(context.getConnection());
    addPublicColumn(ctx);
    addEnumValue(ctx);
  }

  private static void addPublicColumn(final DSLContext ctx) {
    ctx.alterTable("operation")
        .addColumnIfNotExists(DSL.field(
            "operator_dbt_cloud",
            SQLDataType.JSONB.nullable(true)))
        .execute();
  }

  private static void addEnumValue(final DSLContext ctx) {
    ctx.alterType("operator_type").addValue("dbtCloud").execute();
  }

}
