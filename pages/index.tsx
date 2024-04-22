
import React, { useState, useEffect } from 'react'
import HomeTemplate from '../src/front/homeComponents/HomeTemplate';
import { API } from '@aws-amplify/api';
import { listStocks } from "../src/graphql/queries"

type StockData = {
  id: string;
  code: string;
  name: string;
  price: number;
  dividend: number | null;
  createdAt: string;
  updatedAt: string;
  __typename: string;
};

type ListStocksQueryResult = {
  data: {
      listStocks: {
          items: StockData[];
      };
  };
}

export default function Home() {
  const [stockDatas, setStockDatas] = useState<StockData[]>([]);

  const fetchStocks = async () => {
    try {
        const result = await API.graphql({
            query: listStocks,
            variables: { limit: 1000 },
            authMode: 'API_KEY'
        }) as ListStocksQueryResult;
        setStockDatas(result.data.listStocks.items);
    } catch (error) {
        console.error('エラー発生:', error);
    }
  } 

  useEffect(() => {
      fetchStocks();
  }, []);

  return (
    <HomeTemplate
      stockDatas={ stockDatas }
    />
  );
}
