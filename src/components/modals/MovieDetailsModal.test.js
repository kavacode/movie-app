import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import MovieDetailsModal from "./MovieDetailsModal";

describe("MovieDetailsModal", () => {
  it("renders movie details correctly", () => {
    render(<MovieDetailsModal movie={{ imdbID: "123", Title: "Test Movie", Poster: "test.jpg", Year: "2022", Director: "John Doe", Actors: "Actor 1, Actor 2", Country: "USA" }} closeModal={() => {}} />);

    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("Year: 2022")).toBeInTheDocument();
    expect(screen.getByText("Director: John Doe")).toBeInTheDocument();
    expect(screen.getByText("Actors: Actor 1, Actor 2")).toBeInTheDocument();
    expect(screen.getByText("Country: USA")).toBeInTheDocument();

    // Testing Library
    expect(screen.getByAltText("Test Movie")).toBeInTheDocument();
  });

  it("calls closeModal callback when 'Close' button is clicked", () => {
    const closeModalMock = jest.fn();

    render(<MovieDetailsModal movie={{}} closeModal={closeModalMock} />);

    fireEvent.click(screen.getByText("Close"));

    expect(closeModalMock).toHaveBeenCalled();
  });
});
