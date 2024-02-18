import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
	 search: searchReducer,
  },
  devTools: process.env.NODE_ENV !== "production", //проверка через Redux DevTools
});

export default store;
