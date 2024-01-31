import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, Logo, SearchBar, AuthIcon } from "./HeaderStyles";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // перенаправить на страницу поиска
    navigate(`/search/${searchQuery}`);
    // попробовать использовать хук юзХистори
    // переделать
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
