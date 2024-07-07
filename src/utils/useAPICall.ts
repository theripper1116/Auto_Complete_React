import { useState, useEffect } from "react";
import { API_URL } from "./URL";

const useApiCall = (str: string): Array<string> => {
  const [storeData, setStoreData] = useState(Array<string>);

  const getAPIData = async () => {
    const getRawData = await fetch(API_URL+str);
    const getData = await getRawData.json();
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return storeData;
};

export default useApiCall;
