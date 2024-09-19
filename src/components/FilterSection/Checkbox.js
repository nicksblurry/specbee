import React from "react";

const FilterCheckboxItem = ({
  itemName,
  index,
  handleClick,
  filterCheckboxMap,
  filterTypeText,
}) => {
  return (
    <div className="text-[14px] leading-[22px] text-[#171A1F] mx-4 my-3">
      <label>
        <input type="checkbox" id="checkbox" checked={filterCheckboxMap[index]} onChange={() => handleClick(itemName, index, filterTypeText)} className="cursor-pointer" />
        <span className="checkmark"></span>
      </label>
      <label onClick={() => handleClick(itemName, index, filterTypeText)} className="ml-[10px] hover:underline cursor-pointer select-none">{itemName}</label>
    </div>
  );
};

export default FilterCheckboxItem;
