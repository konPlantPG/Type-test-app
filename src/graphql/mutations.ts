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
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStockMutationVariables,
  APITypes.DeleteStockMutation
>;
