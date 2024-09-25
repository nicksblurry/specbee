const PaginationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PAGINATION":
      const { filteredStories, allStories, activeCategories, activeAuthors, searchValue } = action.payload;

      let data;
      if (activeCategories?.length === 0 && activeAuthors?.length === 0 && searchValue.length === 0) {
        data = allStories;
      } else {
        data = filteredStories;
      }
      
      return {
        ...state,
        totalPages: Math.ceil(data.length / state.limit),
        filteredArticles: data,
      };

    case "SET_PAGE_NUMBER":
        return {
            ...state,
            currentPage: action.payload,
          };

    default:
      return state;
  }
};

export default PaginationReducer;
