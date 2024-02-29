import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  test("renders Sidebar with links", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const mainLink = screen.getByText("Main");
    const favoritesLink = screen.getByText("Favorites");
    const searchLink = screen.getByText("Search");

    expect(mainLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
    expect(searchLink).toBeInTheDocument();
  });

  test("navigates to the correct routes", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const mainLink = screen.getByText("Main");
    const favoritesLink = screen.getByText("Favorites");
    const searchLink = screen.getByText("Search");

    expect(mainLink).toHaveAttribute("href", "/");
    expect(favoritesLink).toHaveAttribute("href", "/favorites");
    expect(searchLink).toHaveAttribute("href", "/search");
  });
});
