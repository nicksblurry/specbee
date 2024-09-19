import { createContext, useContext, useEffect, useReducer } from "react";
import appReducer from "../reducers/AppReducer";

const AppContext = createContext();

const API = process.env.NEXT_PUBLIC_API_URL;

const initialState = {
  isLoading: true,
  isError: false,
  stories: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const stories = await res.json();
      dispatch({ type: "SET_API_DATA", payload: stories });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppReducer = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useAppReducer };
