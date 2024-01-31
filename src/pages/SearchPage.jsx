import React, { useState, useEffect, useMemo } from "react";
import MovieCard from "../components/other/MovieCard";
import { MoviesContainer } from "./MoviesPageStyles";
import { Button, TextField } from "@mui/material";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        return;
      }

      try {
        const apiKey = "71cd41bc";
        const response = await fetch(
          `http://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setSearchResults(data.Search);
          setError(null);
        } else {
          setSearchResults([]);
          setError(data.Error);
        }
      } catch (error) {
        setSearchResults([]);
        setError("An error occurred while fetching data.");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const filteredResults = useMemo(() => {
    return searchResults.filter((movie) =>
      movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchResults, searchQuery]);

  return (
    <div>
      <h2>Search</h2>
      <form onSubmit={handleSearchSubmit}>
        <TextField
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter movie title"
          sx={{
            width: "600px",
            marginLeft: "16px",
            marginBottom: "16px",
            marginRight: "30px",
          }}
        />
        <Button type="submit" variant="contained" size="large">
          Search
        </Button>
      </form>

      {filteredResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <MoviesContainer>
            {filteredResults.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </MoviesContainer>
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default SearchPage;
