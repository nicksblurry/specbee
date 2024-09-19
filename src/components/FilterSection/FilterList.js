import React from "react";
import { X } from 'lucide-react';
import SortBy from "./SortBy";
import FilterBy from "./FilterBy";
import { useFilterContext } from "../../context/FilterContext";

const FilterList = ({ handleMenuIconClick }) => {
  const {
    filteredCategories,
    filteredAuthors,
    filteredCategoriesCheckboxes,
    filteredAuthorsCheckboxes,
    activeCategories,
    activeAuthors,
  } = useFilterContext();

  return (
    <>
      <section className="border-[1px] border-[#FFF] rounded-[6px] p-6 pb-10 lg:pb-60 shadow-[0_0_4px_0px_#171A1F1F] fixed top-0 left-0 h-full max-lg:w-[17rem] lg:relative !overflow-scroll scroll-bar">
        <X size={20} strokeWidth={1.25} className="absolute top-4 right-2 lg:hidden" onClick={handleMenuIconClick} />
        <FilterBy
          filterType={filteredCategories}
          filterCheckboxMap={filteredCategoriesCheckboxes}
          filterTypeText="category"
          activeFilters={activeCategories}
        />
        <FilterBy
          filterType={filteredAuthors}
          filterCheckboxMap={filteredAuthorsCheckboxes}
          filterTypeText="author"
          activeFilters={activeAuthors}
        />
        <SortBy />
      </section>
    </>
  );
};

export default FilterList;
