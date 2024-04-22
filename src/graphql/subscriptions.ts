/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateStock = /* GraphQL */ `subscription OnCreateStock($filter: ModelSubscriptionStockFilterInput) {
  onCreateStock(filter: $filter) {
    id
    code
    name
    price
    dividend
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStockSubscriptionVariables,
  APITypes.OnCreateStockSubscription
>;
export const onUpdateStock = /* GraphQL */ `subscription OnUpdateStock($filter: ModelSubscriptionStockFilterInput) {
  onUpdateStock(filter: $filter) {
    id
    code
    name
    price
    dividend
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStockSubscriptionVariables,
  APITypes.OnUpdateStockSubscription
>;
export const onDeleteStock = /* GraphQL */ `subscription OnDeleteStock($filter: ModelSubscriptionStockFilterInput) {
  onDeleteStock(filter: $filter) {
    id
    code
    name
    price
    dividend
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStockSubscriptionVariables,
  APITypes.OnDeleteStockSubscription
>;
