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
    clicks {
      nextToken
      __typename
    }
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
    clicks {
      nextToken
      __typename
    }
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
    clicks {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStockSubscriptionVariables,
  APITypes.OnDeleteStockSubscription
>;
export const onCreateClick = /* GraphQL */ `subscription OnCreateClick($filter: ModelSubscriptionClickFilterInput) {
  onCreateClick(filter: $filter) {
    id
    stockId
    stock {
      id
      code
      name
      price
      dividend
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateClickSubscriptionVariables,
  APITypes.OnCreateClickSubscription
>;
export const onUpdateClick = /* GraphQL */ `subscription OnUpdateClick($filter: ModelSubscriptionClickFilterInput) {
  onUpdateClick(filter: $filter) {
    id
    stockId
    stock {
      id
      code
      name
      price
      dividend
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateClickSubscriptionVariables,
  APITypes.OnUpdateClickSubscription
>;
export const onDeleteClick = /* GraphQL */ `subscription OnDeleteClick($filter: ModelSubscriptionClickFilterInput) {
  onDeleteClick(filter: $filter) {
    id
    stockId
    stock {
      id
      code
      name
      price
      dividend
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteClickSubscriptionVariables,
  APITypes.OnDeleteClickSubscription
>;
