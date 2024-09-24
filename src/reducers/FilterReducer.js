const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTERED_STORIES":
      let categories = [];
      let authors = [];
      action.payload.forEach((item) => {
        categories.push(item?.source);
        authors.push(item?.author);
      });

      let filterCategories = [...new Set(categories)];
      let filterAuthors = [...new Set(authors)];

      return {
        ...state,
        filteredStories: action.payload,
        filteredCategories: filterCategories,
        filteredCategoriesCheckboxes: [...Array(filterCategories.length)].fill(
          false
        ),
        filteredAuthors: filterAuthors,
        filteredAuthorsCheckboxes: [...Array(filterAuthors.length)].fill(false),
        allStories: action.payload,
      };

    case "GET_sortValue":
      return {
        ...state,
        sortValue: action.payload.item,
        sortMethod: action.payload.isAscendingSorting,
      };

    case "SORT_STORIES":
      const { sortValue, sortMethod } = state;
      let tempSortProduct = [...state.allStories];

      const sortstories = (a, b) => {
        if (sortValue === "date" && sortMethod) {
          return a[sortValue] < b[sortValue] ? 1 : a[sortValue] == b[sortValue] ? 0 : -1;
        }

        if (sortValue === "date") {
          return a[sortValue] > b[sortValue] ? 1 : a[sortValue] == b[sortValue] ? 0 : -1;
        }

        if (sortValue === "title" && sortMethod) {
          return a[sortValue].localeCompare(b[sortValue]);
        }

        if (sortValue === "title") {
          return b[sortValue].localeCompare(a[sortValue]);
        }
      };

      let newSortData = tempSortProduct.sort(sortstories);
      let sortAllArticles = state.allStories.sort(sortstories)

      return {
        ...state,
        filteredStories: newSortData,
        allStories: sortAllArticles,
      };

    case "UPDATE_FILTER_CHECKBOX_MAP":
      let newCheckboxArray =
        action.payload.filterTypeText === "category"
          ? [...state.filteredCategoriesCheckboxes]
          : [...state.filteredAuthorsCheckboxes];
      newCheckboxArray[action.payload.index] =
        !newCheckboxArray[action.payload.index];

      if (action.payload.filterTypeText === "category") {
        return {
          ...state,
          filteredCategoriesCheckboxes: newCheckboxArray,
        };
      } else {
        return {
          ...state,
          filteredAuthorsCheckboxes: newCheckboxArray,
        };
      }

    case "UPDATE_ACTIVE_FILTERS":
      let newActiveArray =
        action.payload.filterTypeText === "category"
          ? [...state.activeCategories]
          : [...state.activeAuthors];

      if (action.payload.mappedIndex) {
        newActiveArray = newActiveArray.filter(
          (itemName) => itemName !== action.payload.item
        );
      } else {
        newActiveArray.push(action.payload.item);
      }

      if (action.payload.filterTypeText === "category") {
        return {
          ...state,
          activeCategories: newActiveArray,
        };
      } else {
        return {
          ...state,
          activeAuthors: newActiveArray,
        };
      }

    case "FILTERED_STORIES":
      let { allStories } = state;
      let tempFilterProduct = [...allStories];

      tempFilterProduct = tempFilterProduct.filter((curElem) => {
        return (
          state.activeCategories.includes(curElem.source) ||
          state.activeAuthors.includes(curElem.author)
        );
      });

      return {
        ...state,
        filteredStories: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterReducer;
