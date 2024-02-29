import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import Header from "./Header";
import { setSearchQuery, setIsSearchActive } from "../../store/moviesSlice";

const mockStore = configureStore();

describe("Header", () => {
  let store;
//Redux store
  beforeEach(() => {
    store = mockStore({
      movies: {
        searchQuery: "",
      },
    });
  });

  test("renders Header with logo, search bar, and auth icon", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const logo = screen.getByText("Movie-app");
    const searchBar = screen.getByPlaceholderText("Enter movie title");
    const authIcon = screen.getByText("👤");

    expect(logo).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(authIcon).toBeInTheDocument();
  });

  test("dispatches setSearchQuery and setIsSearchActive on search input change", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const searchBar = screen.getByPlaceholderText("Enter movie title");

    fireEvent.change(searchBar, { target: { value: "Test" } });

    const actions = store.getActions();
    const expectedActions = [
      setSearchQuery("Test"),
      setIsSearchActive(true),
    ];

    expect(actions).toEqual(expectedActions);
  });
});
