import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeaderContainer, Logo, SearchBar, AuthIcon } from "./HeaderStyles";
import { setSearchQuery } from "../../store/moviesSlice";

const Header = () => {
  const searchQuery = useSelector((state) => state.searchQuery);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
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
