import React from 'react';
import { useState, useEffect } from 'react';
import Table from '../molecules/Table';
import { StockData } from '../../types/stockData.types';


interface HomeOrganismProps {
    stockDatas: StockData[];
}

interface StockDataGroupedByName {
    [key: string]: StockData[];
}

interface DataSet {
    label: string;
    data: { x: string; y: number }[];
    borderColor: string;
    backgroundColor: string;
}
  
  interface DataState {
    datasets: DataSet[];
}



const HomeOrganism = (props: HomeOrganismProps) => {

    const [selectedName, setSelectedName] = useState('')
    const [stockDatasGroupedByNames, setStockDatasGroupedByNames] = useState<StockDataGroupedByName>({});
    const [latestStockDatas, setLatestStockDatas] = useState<StockData[]>([]);
    const [rows, setRows] = useState<Array<{ id: number; name: string; price: number; dividend: number | null; createdAt: string; dividendYield: string; }>>([]);
    

    const columns = [
        { field: 'name', headerName: '名前', width: 300 },
        { field: 'price', headerName: '株価', width: 150 },
        { field: 'dividend', headerName: '分配金', width: 150 },
        { field: 'dividendYield', headerName: '分配利回り (%)', width: 150 },
    ]
      
          
    useEffect(() => {
        const initialGroupedData: { [key: string]: StockData[] } = {};
    
        const groupedData = props.stockDatas ? props.stockDatas.reduce((acc, stockData) => {
            const { name } = stockData;
            if (!acc[name]) {
                acc[name] = [];
            }
            acc[name].push(stockData);
            acc[name].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            return acc;
        }, initialGroupedData) : {};
    
        setStockDatasGroupedByNames(groupedData);
    
        const latestDatas = Object.values(groupedData).map(stockDatasGroupedByName => {
            return stockDatasGroupedByName.reduce((latest, current) => {
                return new Date(latest.createdAt).getTime() > new Date(current.createdAt).getTime() ? latest : current;
            });
        });
        setLatestStockDatas(latestDatas);
    }, [props.stockDatas]);

    useEffect(() => {
      const newRows = latestStockDatas.map((latestStockData, index) => ({
        id: index,
        name: latestStockData.name,
        price: latestStockData.price,
        dividend: latestStockData.dividend,
        createdAt: latestStockData.createdAt,
        dividendYield: latestStockData.dividend && latestStockData.price ? ((latestStockData.dividend / latestStockData.price) * 100).toFixed(2) : "N/A"
      }))
      .sort((a, b) => {
          let yieldA = a.dividendYield === "N/A" ? -1 : parseFloat(a.dividendYield);
          let yieldB = b.dividendYield === "N/A" ? -1 : parseFloat(b.dividendYield);
          return yieldB - yieldA;
      })
      .slice(0, 10);
      setRows(newRows)
    }, [latestStockDatas])

    
    return (
        <div className="flex justify-center px-4">  
            <Table
                rows={rows || []}
                columns={columns}
                height = {650} 
            />
        </div>
    )
}

export default HomeOrganism