import React, { useState } from "react";
import { MoveDown } from 'lucide-react';

const FilterRadioButton = ({
  itemName,
  value,
  selectedRadioButton,
  index,
  defaultValue,
  handleClick,
  changeSortingMethod,
}) => {
  const [isAscendingSorting, setIsAscendingSorting] = useState(true);

  return (
    <div className="flex justify-between items-center text-[14px] leading-[22px] text-[#171A1F] mx-4 mt-3">
      <div>
        <label>
          <input name="sortBy" type="checkbox" id="checkbox" value={value} checked={selectedRadioButton[index] ?? defaultValue[0]} onChange={() => handleClick(itemName, index, isAscendingSorting)} className="cursor-pointer" />
          <span className="checkmark"></span>
        </label>
        <label onClick={() => handleClick(itemName, index, isAscendingSorting)} className="ml-[10px] hover:underline cursor-pointer select-none">{itemName}</label>
      </div>
      {selectedRadioButton[index] && (
        <MoveDown
          size={16}
          strokeWidth={2}
          className={`h-fit cursor-pointer transition-all duration-300 ease-in-out ${!isAscendingSorting && "rotate-180"}`}
          onClick={() => {
            changeSortingMethod(isAscendingSorting);
            setIsAscendingSorting((prevVal) => !prevVal);
          }}
        />
      )}
    </div>
  );
};

export default FilterRadioButton;
