import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  PosterContainer,
  PosterImage,
  LargerPreview,
} from './MovieDetailsModalStyles';

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
      <p>Rated: {movie.Rated}</p>
      <p>Runtime: {movie.Runtime}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Plot: {movie.Plot}</p>
      <p>Country: {movie.Country}</p>
            <p>
        Ratings:
        {movie.Ratings && movie.Ratings.length > 0 ? (
          movie.Ratings.map((rating, index) => (
            <div key={index}>
              <p>Source: {rating.Source}</p>
              <p>Value: {rating.Value}</p>
            </div>
          ))
        ) : (
          <p>No ratings available</p>
        )}
      </p>
      <button onClick={closeModal}>Close</button>
    </ModalContent>
    </ModalOverlay>
  );
};

export default MovieDetailsModal;