import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/other/MovieCard";
import { MoviesContainer, MoviesPageContainer } from "./MoviesPageStyles";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=71cd41bc&s=movie`
        );
        setMovies(response.data.Search);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MoviesPageContainer>
      <h2>Films</h2>
      <MoviesContainer>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </MoviesContainer>
    </MoviesPageContainer>
  );
};

export default MoviesPage;
