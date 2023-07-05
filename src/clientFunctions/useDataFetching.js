import { useEffect, useState } from "react";
import { loadCryptoMarketsPrices, loadCryptoInfo } from "./fetchFunctions";

export const useDataFetching = (typeOfFunc, cryptoIn) => {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    console.log("effect")
    const fetchData = async () => {
      try {
        if (typeOfFunc === "general") {
          await loadCryptoInfo((data, err) => {
            if (err) {
              console.error(err);
              return;
            }
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

    fetchData(); //MAYBE AWAIT THIS

    const intervalId = setInterval(fetchData, 30000);

    return () => {
      clearInterval(intervalId);
    };
  },[]);
  return data;
};
