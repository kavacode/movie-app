import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "../components/other/MovieCard";
import { MoviesContainer, MoviesPageContainer } from "./MoviesPageStyles";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

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

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (movie) => {
    // добавление избранное
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, movie];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <MoviesPageContainer>
      <h2>Films</h2>
      <MoviesContainer>
        {movies.map((movie) => (
          <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
            <MovieCard
              movie={movie}
              addToFavorites={() => addToFavorites(movie)}
              removeFromFavorites={() => {}}
            />
          </Link>
        ))}
      </MoviesContainer>
    </MoviesPageContainer>
  );
};

export default MoviesPage;
