/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStockInput = {
  id?: string | null,
  code: string,
  name: string,
  price?: number | null,
  dividend?: number | null,
  createdAt?: string | null,
};

export type ModelStockConditionInput = {
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  dividend?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelStockConditionInput | null > | null,
  or?: Array< ModelStockConditionInput | null > | null,
  not?: ModelStockConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Stock = {
  __typename: "Stock",
  id: string,
  code: string,
  name: string,
  price?: number | null,
  dividend?: number | null,
  createdAt: string,
  clicks?: ModelClickConnection | null,
  updatedAt: string,
};

export type ModelClickConnection = {
  __typename: "ModelClickConnection",
  items:  Array<Click | null >,
  nextToken?: string | null,
};

export type Click = {
  __typename: "Click",
  id: string,
  stockId: string,
  stock?: Stock | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStockInput = {
  id: string,
  code?: string | null,
  name?: string | null,
  price?: number | null,
  dividend?: number | null,
  createdAt?: string | null,
};

export type DeleteStockInput = {
  id: string,
};

export type CreateClickInput = {
  id?: string | null,
  stockId: string,
  createdAt?: string | null,
};

export type ModelClickConditionInput = {
  stockId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelClickConditionInput | null > | null,
  or?: Array< ModelClickConditionInput | null > | null,
  not?: ModelClickConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateClickInput = {
  id: string,
  stockId?: string | null,
  createdAt?: string | null,
};

export type DeleteClickInput = {
  id: string,
};

export type ModelStockFilterInput = {
  id?: ModelIDInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  dividend?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStockFilterInput | null > | null,
  or?: Array< ModelStockFilterInput | null > | null,
  not?: ModelStockFilterInput | null,
};

export type ModelStockConnection = {
  __typename: "ModelStockConnection",
  items:  Array<Stock | null >,
  nextToken?: string | null,
};

export type ModelClickFilterInput = {
  id?: ModelIDInput | null,
  stockId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelClickFilterInput | null > | null,
  or?: Array< ModelClickFilterInput | null > | null,
  not?: ModelClickFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionStockFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  code?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  dividend?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStockFilterInput | null > | null,
  or?: Array< ModelSubscriptionStockFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionClickFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  stockId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClickFilterInput | null > | null,
  or?: Array< ModelSubscriptionClickFilterInput | null > | null,
};

export type CreateStockMutationVariables = {
  input: CreateStockInput,
  condition?: ModelStockConditionInput | null,
};

export type CreateStockMutation = {
  createStock?:  {
    __typename: "Stock",
    id: string,
    code: string,
    name: string,
    price?: number | null,
    dividend?: number | null,
    createdAt: string,
    clicks?:  {
      __typename: "ModelClickConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateStockMutationVariables = {
  input: UpdateStockInput,
  condition?: ModelStockConditionInput | null,
};

export type UpdateStockMutation = {
  updateStock?:  {
    __typename: "Stock",
    id: string,
    code: string,
    name: string,
    price?: number | null,
    dividend?: number | null,
    createdAt: string,
    clicks?:  {
      __typename: "ModelClickConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteStockMutationVariables = {
  input: DeleteStockInput,
  condition?: ModelStockConditionInput | null,
};

export type DeleteStockMutation = {
  deleteStock?:  {
    __typename: "Stock",
    id: string,
    code: string,
    name: string,
    price?: number | null,
    dividend?: number | null,
    createdAt: string,
    clicks?:  {
      __typename: "ModelClickConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateClickMutationVariables = {
  input: CreateClickInput,
  condition?: ModelClickConditionInput | null,
};

export type CreateClickMutation = {
  createClick?:  {
    __typename: "Click",
    id: string,
    stockId: string,
    stock?:  {
      __typename: "Stock",
      id: string,
      code: string,
      name: string,
      price?: number | null,
      dividend?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClickMutationVariables = {
  input: UpdateClickInput,
  condition?: ModelClickConditionInput | null,
};

export type UpdateClickMutation = {
  updateClick?:  {
    __typename: "Click",
    id: string,
    stockId: string,
    stock?:  {
      __typename: "Stock",
      id: string,
      code: string,
      name: string,
      price?: number | null,
      dividend?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClickMutationVariables = {
  input: DeleteClickInput,
  condition?: ModelClickConditionInput | null,
};

export type DeleteClickMutation = {
  deleteClick?:  {
    __typename: "Click",
    id: string,
    stockId: string,
    stock?:  {
      __typename: "Stock",
      id: string,
      code: string,
      name: string,
      price?: number | null,
      dividend?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetStockQueryVariables = {
  id: string,
};

export type GetStockQuery = {
  getStock?:  {
    __typename: "Stock",
    id: string,
    code: string,
    name: string,
    price?: number | null,
    dividend?: number | null,
    createdAt: string,
    clicks?:  {
      __typename: "ModelClickConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListStocksQueryVariables = {
  filter?: ModelStockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStocksQuery = {
  listStocks?:  {
    __typename: "ModelStockConnection",
    items:  Array< {
      __typename: "Stock",
      id: string,
      code: string,
      name: string,
      price?: number | null,
      dividend?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClickQueryVariables = {
  id: string,
};

export type GetClickQuery = {
  getClick?:  {
    __typename: "Click",
    id: string,
    stockId: string,
    stock?:  {
      __typename: "Stock",
      id: string,
      code: string,
      name: string,
      price?: number | null,
      dividend?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClicksQueryVariables = {
  filter?: ModelClickFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClicksQuery = {
  listClicks?:  {
    __typename: "ModelClickConnection",
    items:  Array< {
      __typename: "Click",
      id: string,
      stockId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StockByNameQueryVariables = {
  name: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StockByNameQuery = {
  stockByName?:  {
    __typename: "ModelStockConnection",
    items:  Array< {
      __typename: "Stock",
      id: string,
      code: string,
      name: string,
      price?: number | null,
      dividend?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStockSubscriptionVariables = {
  filter?: ModelSubscriptionStockFilterInput | null,
};

export type OnCreateStockSubscription = {
  onCreateStock?:  {
    __typename: "Stock",
    id: string,
    code: string,
    name: string,
    price?: number | null,
    dividend?: number | null,
    createdAt: string,
    clicks?:  {
      __typename: "ModelClickConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateStockSubscriptionVariables = {
  filter?: ModelSubscriptionStockFilterInput | null,
};

export type OnUpdateStockSubscription = {
  onUpdateStock?:  {
    __typename: "Stock",
    id: string,
    code: string,
    name: string,
    price?: number | null,
    dividend?: number | null,
    createdAt: string,
    clicks?:  {
      __typename: "ModelClickConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteStockSubscriptionVariables = {
  filter?: ModelSubscriptionStockFilterInput | null,
};

export type OnDeleteStockSubscription = {
  onDeleteStock?:  {
    __typename: "Stock",
    id: string,
    code: string,
    name: string,
    price?: number | null,
    dividend?: number | null,
    createdAt: string,
    clicks?:  {
      __typename: "ModelClickConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateClickSubscriptionVariables = {
  filter?: ModelSubscriptionClickFilterInput | null,
};

export type OnCreateClickSubscription = {
  onCreateClick?:  {
    __typename: "Click",
    id: string,
    stockId: string,
    stock?:  {
      __typename: "Stock",
      id: string,
      code: string,
      name: string,
      price?: number | null,
      dividend?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClickSubscriptionVariables = {
  filter?: ModelSubscriptionClickFilterInput | null,
};

export type OnUpdateClickSubscription = {
  onUpdateClick?:  {
    __typename: "Click",
    id: string,
    stockId: string,
    stock?:  {
      __typename: "Stock",
      id: string,
      code: string,
      name: string,
      price?: number | null,
      dividend?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClickSubscriptionVariables = {
  filter?: ModelSubscriptionClickFilterInput | null,
};

export type OnDeleteClickSubscription = {
  onDeleteClick?:  {
    __typename: "Click",
    id: string,
    stockId: string,
    stock?:  {
      __typename: "Stock",
      id: string,
      code: string,
      name: string,
      price?: number | null,
      dividend?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
