import React, { useState, useEffect } from 'react'
import { API,  graphqlOperation } from '@aws-amplify/api';
import { listStocks } from '../src/graphql/queries';
import SimulationTemplate from '../src/front/simulationComponents/SumulationTemplate'

const Simulation = () => {
  
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]); // `any[]` または具体的な型を使用


  useEffect(() => {
    const fetchSimilarStocks = async () => {
      if (query.trim() !== '') {
        try {
          const results = await API.graphql(graphqlOperation(listStocks, {filter: {name: {contains: query}}, limit: 1000}));
          const apiResults = results as { data: { listStocks: { items: any[], nextToken: string } } };
          let items = apiResults.data.listStocks.items;
          let nextToken = apiResults.data.listStocks.nextToken;
          while(nextToken){
            const results = await API.graphql(graphqlOperation(listStocks, {filter: {name: {contains: query}}, limit: 1000, nextToken}));
            const apiResults = results as { data: { listStocks: { items: any[], nextToken: string } } };
            items = [...items, ...apiResults.data.listStocks.items]
            nextToken = apiResults.data.listStocks.nextToken;
          }
          if (items) {
            setSearchResults(items);
          }
        } catch (error) {
          console.error('Error fetching similar stocks', error);
        }
      }
    };

    fetchSimilarStocks();
  }, [query]);
 
  return (
    <>
      <SimulationTemplate
      query = {query}
      setQuery = { setQuery }
      searchResults = { searchResults }
      />
      {console.log(query)}
    </>
  )
}
export default Simulation