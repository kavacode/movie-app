import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, Logo, SearchBar, AuthIcon } from "./HeaderStyles";
import { setSearchQuery } from "../../store/action";

const Header = () => {
  const searchQuery = useSelector((state) => state.searchQuery);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <HeaderContainer>
      <Logo>Movie-app</Logo>
      <form onSubmit={handleSearchSubmit}>
        <SearchBar
          type="text"
          placeholder="Enter movie title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      <AuthIcon>👤</AuthIcon>
    </HeaderContainer>
  );
};

export default Header;
