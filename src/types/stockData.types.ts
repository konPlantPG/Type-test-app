export interface StockData {
    id: string;
    code: string;
    name: string;
    price: number;
    dividend: number | null;
    createdAt: string;
    updatedAt: string;
    __typename: string;
  }