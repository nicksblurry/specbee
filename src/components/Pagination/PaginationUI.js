import React from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePaginationContext } from "../../context/PaginationContext";


const PaginationUI = () => {
  const { totalPages, currentPage, setCurrentPage } = usePaginationContext();

  return (
    <>
      <div className="pagination-btn">
        <div className="pb-10 md:pt-0 flex max-sm:gap-x-2 justify-center sm:justify-end items-center">
          <ChevronLeft size={16} strokeWidth={2} onClick={() => { setCurrentPage(currentPage-1) }} className={`mr-2 sm:mr-6 text-xl text-[#000] cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out ${currentPage === 0 && "opacity-10 pointer-events-none"}`}/>

          {[...Array(totalPages).keys()].map((pageNum) => (
            <div
              className={`flex items-center justify-center text-sm text-[#000] sm:mr-2 h-8 w-8 text-center rounded-full hover:bg-rose-400 hover:text-[#FFF] cursor-pointer ${pageNum === currentPage && "bg-[#000] hover:bg-[#000] text-[#FFF]"}`}
              key={pageNum}
              onClick={() => {setCurrentPage(pageNum)}}
            >
              {pageNum + 1}
            </div>
          ))}

          <ChevronRight size={16} strokeWidth={2} onClick={() => {setCurrentPage(currentPage+1)}} className={`ml-2 text-xl text-[#000] cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out ${currentPage === totalPages - 1 && "opacity-10 pointer-events-none"}`} />
      </div>
      </div>
    </>
  );
};

export default PaginationUI;
