import { useState, useEffect } from "react";

import { API_URL } from "./URL";
import { itemsObject } from "./interface/ItemsObject";

const useApiCall = (str: string): Array<itemsObject> => {
  const [storeData, setStoreData] = useState(Array<itemsObject>);

  const getAPIData = async () => {
    const getRawData = await fetch(API_URL + str);
    const getData = await getRawData.json();
    setStoreData(getData?.items);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return storeData;
};

export default useApiCall;
