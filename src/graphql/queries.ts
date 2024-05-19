/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getStock = /* GraphQL */ `query GetStock($id: ID!) {
  getStock(id: $id) {
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
export const getClick = /* GraphQL */ `query GetClick($id: ID!) {
  getClick(id: $id) {
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
` as GeneratedQuery<APITypes.GetClickQueryVariables, APITypes.GetClickQuery>;
export const listClicks = /* GraphQL */ `query ListClicks(
  $filter: ModelClickFilterInput
  $limit: Int
  $nextToken: String
) {
  listClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      stockId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClicksQueryVariables,
  APITypes.ListClicksQuery
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
