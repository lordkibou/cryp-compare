import { useEffect, useState } from "react";
import { loadCryptoMarketsPrices, loadCryptoInfo } from "./fetchFunctions";

export const useDataFetching = (typeOfFunc, cryptoIn) => {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeOfFunc === "general") {
          await loadCryptoInfo((data, err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log("Esta llamando a la 1 funcion dentro de useEffect",data)
            setData(data);
          });
        } else {
          await loadCryptoMarketsPrices(cryptoIn, (data, err) => {
            console.log("funcion")
            if (err) {
              console.error(err);
              return;
            }
            setData(data);
          });
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 30000);

    return () => {
      clearInterval(intervalId);
    };
  },[]);
  return data;
};