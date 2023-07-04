import { useEffect, useState } from 'react';
import { loadCryptoMarketsPrices, loadCryptoInfo } from './loadCryptoMarketsPrices'; 

export const useDataFetching = (url) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };
  
      fetchData();
  
      const intervalId = setInterval(fetchData, 30000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [url]);
  
    return data;
};
  
