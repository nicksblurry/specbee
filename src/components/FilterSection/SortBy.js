import React, { useState } from "react";
import FilterRadioButton from "./RadioButton";
import { useFilterContext } from "../../context/FilterContext";

let sortValues = ["date", "title"];
let defaultValue = [...Array(sortValues.length)].map((_, index) => index === 0 ? true : false);

const SortBy = () => {
  const [value, setValue] = useState("");
  const [selectedRadioButton, setSelectedRadioButton] = useState([
    ...defaultValue,
  ]);

  const { sorting } = useFilterContext();

  const handleClick = (itemName, index, isAscendingSorting) => {
    setValue(itemName);
    setSelectedRadioButton((arr) => {
      let newArr = arr.map((_, ind) => (index === ind ? true : false));
      return [...newArr];
    });
    sorting(itemName, isAscendingSorting);
  };

  const changeSortingMethod = (isAscendingSorting) => {
    let index = selectedRadioButton.indexOf(true);
    sorting(sortValues[index], !isAscendingSorting);
  };

  return (
    <div className="text-[#000] flex flex-col">
      <h6 className="w-full bg-[#F8F9FA] rounded-[4px] px-6 py-2 text-[#171A1F] text-base capitalize font-bold mb-2 cursor-default">Sort By</h6>
      {sortValues?.map((item, index) => (
        <FilterRadioButton
          itemName={item}
          selectedRadioButton={selectedRadioButton}
          value={value}
          index={index}
          defaultValue={defaultValue}
          handleClick={handleClick}
          changeSortingMethod={changeSortingMethod}
        />
      ))}
    </div>
  );
};

export default SortBy;
