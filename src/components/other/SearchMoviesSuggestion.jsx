import React from "react";
import Suggestion from "../components/Suggestion";
import { useSelector } from "react-redux";

const SearchMoviesSuggestion = () => {
    const { search } = useSelector((store) => store);
    const { genres } = useSelector((store) => store.genres);

    return <Suggestion searchResults={search.results} genres={genres} />;
};

export default SearchMoviesSuggestion;
