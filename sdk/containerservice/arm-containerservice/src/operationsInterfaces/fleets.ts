/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Fleet,
  FleetsListByResourceGroupOptionalParams,
  FleetsListOptionalParams,
  FleetsCreateOrUpdateOptionalParams,
  FleetsCreateOrUpdateResponse,
  FleetsUpdateOptionalParams,
  FleetsUpdateResponse,
  FleetsGetOptionalParams,
  FleetsGetResponse,
  FleetsDeleteOptionalParams,
  FleetsListCredentialsOptionalParams,
  FleetsListCredentialsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Fleets. */
export interface Fleets {
  /**
   * Lists fleets in the specified subscription and resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: FleetsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Fleet>;
  /**
   * Lists fleets in the specified subscription.
   * @param options The options parameters.
   */
  list(options?: FleetsListOptionalParams): PagedAsyncIterableIterator<Fleet>;
  /**
   * Creates or updates a Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param parameters The Fleet to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    fleetName: string,
    parameters: Fleet,
    options?: FleetsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FleetsCreateOrUpdateResponse>,
      FleetsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param parameters The Fleet to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    fleetName: string,
    parameters: Fleet,
    options?: FleetsCreateOrUpdateOptionalParams
  ): Promise<FleetsCreateOrUpdateResponse>;
  /**
   * Patches a fleet resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsUpdateOptionalParams
  ): Promise<FleetsUpdateResponse>;
  /**
   * Gets a Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsGetOptionalParams
  ): Promise<FleetsGetResponse>;
  /**
   * Deletes a Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Lists the user credentials of a Fleet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  listCredentials(
    resourceGroupName: string,
    fleetName: string,
    options?: FleetsListCredentialsOptionalParams
  ): Promise<FleetsListCredentialsResponse>;
}
