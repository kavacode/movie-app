import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  devTools: process.env.NODE_ENV !== "production", //проверка через Redux DevTools
});

export default store;
