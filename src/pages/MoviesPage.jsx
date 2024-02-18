import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "../components/other/MovieCard";
import { MoviesContainer, MoviesPageContainer } from "./MoviesPageStyles";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchQuery,
  setMovies,
  setFavorites,
  setIsSearchActive,
  selectSearchQuery,
  selectMovies,
  selectFavorites,
  selectIsSearchActive,
} from "../store/moviesSlice";

const MoviesPage = () => {
  const searchQuery = useSelector(selectSearchQuery);
  const movies = useSelector(selectMovies);
  const favorites = useSelector(selectFavorites);
  const isSearchActive = useSelector(selectIsSearchActive);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          isSearchActive
            ? `http://www.omdbapi.com/?apikey=71cd41bc&s=${searchQuery}`
            : `http://www.omdbapi.com/?apikey=71cd41bc&s=movie`
        );
        dispatch(setMovies(response.data.Search || []));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [searchQuery, isSearchActive, dispatch]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    dispatch(setFavorites(storedFavorites));
  }, [dispatch]);

  const addToFavorites = (movie) => {
    const newFavorites = [...favorites, movie];
    dispatch(setFavorites(newFavorites));
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));
    dispatch(setIsSearchActive(query.trim() !== ""));
  };

  return (
    <MoviesPageContainer>
      <h2>Films</h2>
      <button onClick={() => dispatch(setIsSearchActive(!isSearchActive))}>
        Toggle Search
      </button>
      <MoviesContainer>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
              <MovieCard
                movie={movie}
                addToFavorites={() => addToFavorites(movie)}
                removeFromFavorites={() => {}}
              />
            </Link>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </MoviesContainer>
    </MoviesPageContainer>
  );
};

export default MoviesPage;