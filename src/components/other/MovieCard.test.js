import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";

describe("MovieCard", () => {
  it("renders movie details correctly", () => {
    const movie = {
      imdbID: "123",
      Title: "Test Movie",
      Poster: "test.jpg",
    };

    render(<MovieCard movie={movie} />);

    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByAltText("Test Movie")).toBeInTheDocument();
  });

  it("calls addToFavorites callback when 'Favorites' button is clicked", () => {
    const movie = {
      imdbID: "123",
      Title: "Test Movie",
      Poster: "test.jpg",
    };

    const addToFavoritesMock = jest.fn();

    render(<MovieCard movie={movie} addToFavorites={addToFavoritesMock} />);

    fireEvent.click(screen.getByText("Favorites"));

    expect(addToFavoritesMock).toHaveBeenCalledWith(movie);
  });
});