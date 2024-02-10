import React, { useState, useEffect } from "react";
import MovieCard from "../components/other/MovieCard";
import {
  FavoritesContainer,
  FavoritesPageContainer,
} from "./FavoritesPageStyles";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter(
        (favMovie) => favMovie.imdbID !== movie.imdbID
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <FavoritesPageContainer>
      <h2>Favorites</h2>
      <FavoritesContainer>
        {favorites.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            removeFromFavorites={() => removeFromFavorites(movie)}
          />
        ))}
      </FavoritesContainer>
    </FavoritesPageContainer>
  );
};

export default FavoritesPage;
