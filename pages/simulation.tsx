import React, { useState, useEffect } from 'react'
import { API,  graphqlOperation } from '@aws-amplify/api';
import { stockByName } from '../src/graphql/queries';
import SimulationTemplate from '../src/front/simulationComponents/SumulationTemplate'
// import SimulationTemplate from './components/simulationComponents/SimulationTemplate'


const Simulation = () => {
  
  const [query, setQuery] = useState('');


  useEffect(() => {
    const fetchStockByName = async () => {
      if (query.trim() !== '') {
        try {
          const stockData = await API.graphql(graphqlOperation(stockByName, { name: query }));
          console.log(stockData);
        } catch (error) {
          console.error('Error fetching stocks', error);
        }
      }
    };

    fetchStockByName();
  }, [query]);
 
  return (
    <>
      <SimulationTemplate
      query = {query}
      setQuery = { setQuery }
      />
      {console.log(query)}
    </>
  )
}
export default Simulation