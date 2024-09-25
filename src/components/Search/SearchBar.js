import React, { useRef } from "react";
import { Search } from "lucide-react";
import { useFilterContext } from "../../context/FilterContext";

const SearchBar = () => {
  const { searchValue, changeSearchValue, updateSearchedArticle } = useFilterContext();
  const timeoutIdRef = useRef(null);

  const debounceSearch = (fn) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    timeoutIdRef.current = setTimeout(() => {
      fn()
    }, 400);
  };

  const handleSearchInput = (value) => {
    changeSearchValue(value);
    debounceSearch(updateSearchedArticle);
  };

  return (
    <div className="flex justify-end">
      <div className="inline-block relative max-[450px]:w-full">
        <input
          type="text"
          value={searchValue}
          onChange={(evt) => handleSearchInput(evt.target.value)}
          placeholder="Search for"
          className="text-sm leading-[20px] placeholder:text-[#6D758F] border-[1px] border-[#DEE1E6] rounded-lg px-[15px] pl-[2rem] py-[9px] w-full min-[450px]:w-[260px] focus:outline-none shadow-[0_0_2px_0_#171A1F12]"
        />
        <Search
          size={14}
          strokeWidth={2}
          color="#6d758f"
          className="absolute left-[14px] top-2/4 translate-y-[-50%]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
