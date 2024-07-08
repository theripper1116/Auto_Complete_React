import { useCallback } from "react";
import handleSearch from "../utils/handleSearch";

const SearchBar = () => {
  const debounce = (fn: Function, delay: number) => {
    let timer: any;
    return (...args: any) => {
      let context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, delay);
    };
  };

  const optimizedversion = useCallback(() => debounce(handleSearch, 500), []);

  return (
    <>
      <div className="mx-[45%]">Search Bar</div>
      <input
        className="mx-[45%] border-black border-2 rounded-lg"
        onChange={() => {
          optimizedversion();
        }}
      ></input>
    </>
  );
};

export default SearchBar;
