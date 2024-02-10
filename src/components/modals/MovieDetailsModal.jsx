import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  PosterContainer,
  PosterImage,
  LargerPreview,
} from "./MovieDetailsModalStyles";

const MovieDetailsModal = ({ movie, closeModal }) => {
  const [showLargerPreview, setShowLargerPreview] = useState(false);

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>{movie.Title}</h2>
        <PosterContainer
          onMouseEnter={() => setShowLargerPreview(true)}
          onMouseLeave={() => setShowLargerPreview(false)}
        >
          <PosterImage src={movie.Poster} alt={movie.Title} />
          {showLargerPreview && (
            <LargerPreview src={movie.Poster} alt={movie.Title} />
          )}
        </PosterContainer>
        <p>Year: {movie.Year}</p>
        <p>Director: {movie.Director}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Country: {movie.Country}</p>
        <button onClick={closeModal}>Close</button>
        {/* происходит перенаправление на MovieDetailsPage. попробовать history.goBack()*/}
      </ModalContent>
    </ModalOverlay>
  );
};

export default MovieDetailsModal;
