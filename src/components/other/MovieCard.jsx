import React, { useState } from "react";
import { CardContainer } from "./MovieCardStyles";
import MovieDetailsModal from "../modals/MovieDetailsModal";

const MovieCard = ({ movie, addToFavorites, removeFromFavorites }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddToFavorites = (event) => {
    event.preventDefault();
    addToFavorites(movie);
  };

  const handleRemoveFromFavorites = (event) => {
    event.preventDefault();
    removeFromFavorites(movie);
  };

  return (
    <>
      <CardContainer>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <button onClick={openModal}>More Details</button>
        {addToFavorites && (
          <button onClick={handleAddToFavorites}>Favorites</button>
        )}
        {removeFromFavorites && (
          <button onClick={handleRemoveFromFavorites}>
            Remove from Favorites
          </button>
        )}
      </CardContainer>

      {showModal && <MovieDetailsModal movie={movie} closeModal={closeModal} />}
    </>
  );
};

export default MovieCard;
