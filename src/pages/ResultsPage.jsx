import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import options from "../constants/constants";
import LoadingMovieList from "../components/LoadingMovieList";
import MovieCard from "../components/SearchResults.Cart";

const SearchMovie = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const query = searchParams.get("search_query");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=tr-TR&page=1`,
        options,
      )
      .then((res) => setResults(res.data.results))
      .catch((error) => console.error("Error fetching search results:", error));
  }, [query]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {results.length > 0 ? (
        results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <LoadingMovieList />
      )}
    </div>
  );
};

export default SearchMovie;
