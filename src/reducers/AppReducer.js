const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      let data = action.payload;
      data = data.sort((a,b) => a?.date < b?.date ? 1 : -1)

      return {
        ...state,
        isLoading: false,
        stories: data,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default AppReducer;