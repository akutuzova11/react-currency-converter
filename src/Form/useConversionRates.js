import axios from "axios";
import { useEffect, useState } from "react";

const apiURL =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_pVQPUZ3Wr7U8lFMN3GWs43Tzz8SQBoKDqCrcEx5a&currencies=EUR%2CUSD%2CGBP%2CCHF%2CAED%2CAUD%2CCNY%2CCZK%2CDKK%2CHKD%2CHUF%2CJPY%2CMXN%2CNOK%2CNZD&base_currency=PLN";

export const useConversionRates = () => {
  const [conversionRates, setConversionRates] = useState({
    status: "loading",
    rates: null,
  });

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.get(apiURL);

        setConversionRates({
          status: "success",
          date: response.data.meta.last_updated_at,
          rates: response.data.data,
        });
      } catch (error) {
        console.error(error);
        setConversionRates({
          status: "error",
          date: null,
        });
      }
    };
    setTimeout(fetchApiData, 2000);
  }, []);

  return conversionRates;
};
