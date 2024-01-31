import React, { useState } from 'react';
import { CardContainer } from './MovieCardStyles';
import MovieDetailsModal from '../modals/MovieDetailsModal';

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <CardContainer>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <button onClick={openModal}>More Details</button>
        <button>Favorites</button>
      </CardContainer>

      {showModal && (
        <MovieDetailsModal
          movie={movie}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default MovieCard;
