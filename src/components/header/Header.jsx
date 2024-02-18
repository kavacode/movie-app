// Header.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeaderContainer, Logo, SearchBar, AuthIcon } from "./HeaderStyles";
import { setSearchQuery, setIsSearchActive } from "../../store/moviesSlice";

const Header = () => {
  const searchQuery = useSelector((state) => state.movies.searchQuery);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    const query = event.target.value;
    console.log("searchQuery:", query);
    dispatch(setSearchQuery(query));
    dispatch(setIsSearchActive(query.trim() !== ""));
  };

  return (
    <HeaderContainer>
      <Logo>Movie-app</Logo>
      <SearchBar
        type="text"
        placeholder="Enter movie title"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <AuthIcon>👤</AuthIcon>
    </HeaderContainer>
  );
};

export default Header;
