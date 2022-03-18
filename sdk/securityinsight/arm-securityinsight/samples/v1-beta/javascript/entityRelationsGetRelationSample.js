/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets an entity relation.
 *
 * @summary Gets an entity relation.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-01-01-preview/examples/entities/relations/GetEntityRelationByName.json
 */
async function getAnEntityRelation() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityId = "afbd324f-6c48-459c-8710-8d1e1cd03812";
  const relationName = "4bb36b7b-26ff-4d1c-9cbe-0d8ab3da0014";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entityRelations.getRelation(
    resourceGroupName,
    workspaceName,
    entityId,
    relationName
  );
  console.log(result);
}

getAnEntityRelation().catch(console.error);
