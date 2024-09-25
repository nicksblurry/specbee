import React from "react";
import FilterCheckboxItem from "./Checkbox";
import { useFilterContext } from "../../context/FilterContext";

const FilterBy = ({ filterType, filterCheckboxMap, filterTypeText }) => {
  const { updateActiveFilters } = useFilterContext();

  const handleCheckboxClick = (itemName, index, filterTypeText) => {
    updateActiveFilters(filterTypeText, itemName, filterCheckboxMap[index], index)
  };

  return (
    <>
      <div className="text-[#000] flex flex-col mb-4">
        <h6 className={`w-full bg-[#F8F9FA] rounded-[4px] px-6 py-2 text-[#171A1F] text-base capitalize font-bold cursor-default ${filterTypeText === "category" && "max-lg:mt-6"}`}>{filterTypeText}</h6>
        <div>
          {filterType?.map((item, index) => (
            <FilterCheckboxItem
              itemName={item}
              index={index}
              handleClick={handleCheckboxClick}
              filterCheckboxMap={filterCheckboxMap}
              filterTypeText={filterTypeText}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterBy;
