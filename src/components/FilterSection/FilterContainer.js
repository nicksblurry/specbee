import React, { useState } from "react";
import { Menu } from "lucide-react";
import FilterList from "./FilterList";

const FilterContainer = () => {
  const [showMenuIcon, setShowMenuIcon] = useState(true);

  const handleMenuIconClick = () => {
    if(typeof window != 'undefined' && window.document){
      if(showMenuIcon) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'unset';
    }
    setShowMenuIcon(!showMenuIcon)
  }

  return (
    <>
      <Menu size={32} strokeWidth={1.25} className={`lg:hidden transition-all duration-300 ease-in-out ${!showMenuIcon && "rotate-90" }`} onClick={handleMenuIconClick} />

      <div onClick={handleMenuIconClick}  className={`fixed w-full h-full top-0 left-0 bg-[#0000004F] lg:hidden ${showMenuIcon ? "opacity-0 z-[-1] animate-backdropIn" : "opacity-100 z-[5] backdrop-blur-sm animate-backdropOut"}`} />

      <div className={`fixed lg:relative top-0 left-0 max-lg:w-[17rem] h-full lg:hidden ${showMenuIcon ? "opacity-0 z-[-1] animate-slideIn" : "opacity-100 z-10 animate-slideOut"}`}>
        <FilterList handleMenuIconClick={handleMenuIconClick} />
      </div>

      <div className="hidden lg:block">
        <FilterList />
      </div>
    </>
  );
};

export default FilterContainer;
