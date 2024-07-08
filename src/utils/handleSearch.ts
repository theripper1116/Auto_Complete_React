import { useState } from "react";
import { itemsObject } from "./interface/ItemsObject";
import useApiCall from "./useAPICall";

const handleSearch = ((str: string): Array<string> => {
    const [name, setName] = useState(Array<string>);
    const allData: Array<itemsObject> = useApiCall(str);
    let tempArray: Array<string> = [];
    allData.map((ele: itemsObject) => {
        tempArray.push(ele.name);
    })
    setName(tempArray);
    return name;
})

export default handleSearch;