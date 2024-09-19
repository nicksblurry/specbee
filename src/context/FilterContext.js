import { createContext, useContext, useReducer, useEffect } from "react";
import { useAppReducer } from "./AppContext";
import filterReducer from "../reducers/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filteredStories: [],
  allStories: [],
  filteredCategories: [],
  filteredCategoriesCheckboxes: [],
  activeCategories: [],
  filteredAuthors: [],
  filteredAuthorsCheckboxes: [],
  activeAuthors: [],
  sortValue: "",
  sortMethod: "",
};

export const FilterContextProvider = ({ children }) => {
  const { stories } = useAppReducer();

  const [state, dispatch] = useReducer(filterReducer, initialState);

  // sorting function
  const sorting = (item, isAscendingSorting) => {
    dispatch({ type: "GET_sortValue", payload: { item, isAscendingSorting } });
  };

  const updateActiveFilters = (filterTypeText, item, mappedIndex, index) => {
    dispatch({
        type: "UPDATE_FILTER_CHECKBOX_MAP",
        payload: { filterTypeText, index },
      });
    dispatch({
        type: "UPDATE_ACTIVE_FILTERS",
        payload: { filterTypeText, item, mappedIndex },
      });
    dispatch({type: "filteredStories"});

  }

  // to sort the product
  useEffect(() => {
    dispatch({ type: "SORT_STORIES" });
  }, [stories, state.sortValue, state.sortMethod]);

  // to load all the stories
  useEffect(() => {
    dispatch({ type: "LOAD_filteredStories", payload: stories });
  }, [stories]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        sorting,
        updateActiveFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
