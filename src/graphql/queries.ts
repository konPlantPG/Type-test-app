/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const searchSimilarStocks = /* GraphQL */ `query SearchSimilarStocks($keyword: String!) {
  searchSimilarStocks(keyword: $keyword) {
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
` as GeneratedQuery<
  APITypes.SearchSimilarStocksQueryVariables,
  APITypes.SearchSimilarStocksQuery
>;
export const getStock = /* GraphQL */ `query GetStock($id: ID!) {
  getStock(id: $id) {
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
` as GeneratedQuery<APITypes.GetStockQueryVariables, APITypes.GetStockQuery>;
export const listStocks = /* GraphQL */ `query ListStocks(
  $filter: ModelStockFilterInput
  $limit: Int
  $nextToken: String
) {
  listStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      code
      name
      price
      dividend
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStocksQueryVariables,
  APITypes.ListStocksQuery
>;
export const stockByName = /* GraphQL */ `query StockByName(
  $name: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelStockFilterInput
  $limit: Int
  $nextToken: String
) {
  stockByName(
    name: $name
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      code
      name
      price
      dividend
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StockByNameQueryVariables,
  APITypes.StockByNameQuery
>;
