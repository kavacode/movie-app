import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    searchQuery: "",
    movies: [],
    favorites: [],
    isSearchActive: false,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    setIsSearchActive: (state, action) => {
      state.isSearchActive = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setMovies,
  setFavorites,
  setIsSearchActive,
} = moviesSlice.actions;

export const selectSearchQuery = (state) => state.movies.searchQuery;
export const selectMovies = (state) => state.movies.movies;
export const selectFavorites = (state) => state.movies.favorites;
export const selectIsSearchActive = (state) => state.movies.isSearchActive;

export default moviesSlice.reducer;
