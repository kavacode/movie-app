import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsContainer } from "./MovieDetailsStyles";

const MovieDetailsPage = () => {
  const { imdbID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [extendedMovieDetails, setExtendedMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "71cd41bc";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovieDetails(data);

          const extendedResponse = await fetch(
            `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}&plot=full`
          );
          const extendedData = await extendedResponse.json();

          if (extendedData.Response === "True") {
            setExtendedMovieDetails(extendedData);
          } else {
            setError(extendedData.Error);
          }
        } else {
          setError(data.Error);
        }
      } catch (error) {
        setError("Произошла ошибка при получении данных.");
        console.error("Ошибка при получении данных:", error);
      }
    };

    if (imdbID) {
      fetchMovieDetails();
    }

    return () => {
    };
  }, [imdbID]);

  return (
    <DetailsContainer>
      {extendedMovieDetails && (
        <div>
          <h2>{extendedMovieDetails.Title}</h2>
          <img
            src={extendedMovieDetails.Poster}
            alt={`Poster for ${extendedMovieDetails.Title}`}
          />
          <p>{extendedMovieDetails.Plot}</p>
          <p>Year of release: {extendedMovieDetails.Year}</p>
          <p>Type: {extendedMovieDetails.Type}</p>
          <p>Director: {extendedMovieDetails.Director}</p>
          <p>Actors: {extendedMovieDetails.Actors}</p>
          <p>Genre: {extendedMovieDetails.Genre}</p>
          <p>IMDb Rating: {extendedMovieDetails.imdbRating}</p>
          <p>Rated: {extendedMovieDetails.Rated}</p>
          <p>Runtime: {extendedMovieDetails.Runtime}</p>
          <p>Country: {extendedMovieDetails.Country}</p>
          <p>
            Ratings:
            {extendedMovieDetails.Ratings &&
            extendedMovieDetails.Ratings.length > 0 ? (
              extendedMovieDetails.Ratings.map((rating, index) => (
                <div key={index}>
                  <p>Source: {rating.Source}</p>
                  <p>Value: {rating.Value}</p>
                </div>
              ))
            ) : (
              <p>No ratings available</p>
            )}
          </p>
        </div>
      )}
      {error && <p>Ошибка: {error}</p>}
    </DetailsContainer>
  );
};

export default MovieDetailsPage;
