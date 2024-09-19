import { createContext, useContext, useEffect, useReducer } from "react";
import { useFilterContext } from "./FilterContext";
import paginationReducer from "../reducers/PaginationReducer";

const PaginationContext = createContext();

const initialState = {
  filteredArticles: [],
  totalPages: 1,
  currentPage: 0,
  limit: 5,
};

const PaginationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(paginationReducer, initialState);
  const { filteredStories, allStories, activeCategories, activeAuthors } = useFilterContext();

  useEffect(() => {
    dispatch({
      type: "ADD_PAGINATION",
      payload: {
        filteredStories,
        allStories,
        activeCategories,
        activeAuthors,
      },
    });
  }, [allStories, filteredStories, activeCategories, activeAuthors]);

  const setCurrentPage = (pageNum) => {
    dispatch({ type: "SET_PAGE_NUMBER", payload: pageNum});
  }

  return (
    <PaginationContext.Provider value={{ ...state, setCurrentPage }}>
      {children}
    </PaginationContext.Provider>
  );
};

const usePaginationContext = () => {
  return useContext(PaginationContext);
};

export { PaginationProvider, PaginationContext, usePaginationContext };
