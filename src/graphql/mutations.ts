/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createStock = /* GraphQL */ `mutation CreateStock(
  $input: CreateStockInput!
  $condition: ModelStockConditionInput
) {
  createStock(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStockMutationVariables,
  APITypes.CreateStockMutation
>;
export const updateStock = /* GraphQL */ `mutation UpdateStock(
  $input: UpdateStockInput!
  $condition: ModelStockConditionInput
) {
  updateStock(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStockMutationVariables,
  APITypes.UpdateStockMutation
>;
export const deleteStock = /* GraphQL */ `mutation DeleteStock(
  $input: DeleteStockInput!
  $condition: ModelStockConditionInput
) {
  deleteStock(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStockMutationVariables,
  APITypes.DeleteStockMutation
>;
export const createClick = /* GraphQL */ `mutation CreateClick(
  $input: CreateClickInput!
  $condition: ModelClickConditionInput
) {
  createClick(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateClickMutationVariables,
  APITypes.CreateClickMutation
>;
export const updateClick = /* GraphQL */ `mutation UpdateClick(
  $input: UpdateClickInput!
  $condition: ModelClickConditionInput
) {
  updateClick(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateClickMutationVariables,
  APITypes.UpdateClickMutation
>;
export const deleteClick = /* GraphQL */ `mutation DeleteClick(
  $input: DeleteClickInput!
  $condition: ModelClickConditionInput
) {
  deleteClick(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteClickMutationVariables,
  APITypes.DeleteClickMutation
>;
