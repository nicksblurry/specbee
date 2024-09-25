import { createContext, useContext, useReducer, useEffect } from "react";
import { useAppReducer } from "./AppContext";
import filterReducer from "../reducers/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filteredStories: [],            // filtered results data after search/filter 
  allStories: [],                 // list of all article data
  filteredCategories: [],         // list of all categories
  filteredCategoriesCheckboxes: [], 
  activeCategories: [],           // list of active categories
  filteredAuthors: [],            // list of all authors
  filteredAuthorsCheckboxes: [],
  activeAuthors: [],              // list of active authors
  sortValue: "",                  // date/title
  sortMethod: "",                 // ascending/descending
  searchValue: "",                // search string
};

export const FilterContextProvider = ({ children }) => {
  const { stories } = useAppReducer();
  const [state, dispatch] = useReducer(filterReducer, initialState);

  // to sort the stories
  useEffect(() => {
    dispatch({ type: "SORT_STORIES" });
  }, [stories, state.sortValue, state.sortMethod]);

  // to load all the stories
  useEffect(() => {
    dispatch({ type: "LOAD_FILTERED_STORIES", payload: stories });
  }, [stories]);


  // sorting
  const sorting = (item, isAscendingSorting) => {
    dispatch({ type: "GET_SORT_VALUE", payload: { item, isAscendingSorting } });
  };

  // update active filters 
  const updateActiveFilters = (filterTypeText, item, mappedIndex, index) => {
    dispatch({
        type: "UPDATE_FILTER_CHECKBOX_MAP",
        payload: { filterTypeText, index },
      });
    dispatch({
        type: "UPDATE_ACTIVE_FILTERS",
        payload: { filterTypeText, item, mappedIndex },
      });
    dispatch({type: "FILTERED_STORIES"});

  }

  // change search value
  const changeSearchValue = (value) => {
    dispatch({
      type: "CHANGE_SEARCH_VALUE",
      payload: value,
    });
  };

  // update search articles
  const updateSearchedArticle = () => {
    dispatch({
      type: "UPDATE_SEARCHED_ARTICLE",
    });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        sorting,
        updateActiveFilters,
        changeSearchValue,
        updateSearchedArticle,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
