import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import options from "../constants/constants";
import LoadingMovieList from "../components/LoadingMovieList";

const SearchMovie = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const query = searchParams.get("search_query");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=tr-TR&page=1`,
        options
      )
      .then((res) => setResults(res.data.results))
      .catch((error) =>
        console.error("Error fetching search results:", error)
      );
  }, [query]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {results.length > 0 ? (
        results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <LoadingMovieList />
      )}
    </div>
  );
};

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/detail/${movie.id}`} className="flex h-full">
      <div className="flex flex-col bg-black text-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 w-full">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-48 object-contain rounded-t-lg"
        />
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
          <p className="text-gray-400 mb-2">{movie.release_date}</p>
          <p className="text-gray-300 line-clamp-3">{movie.overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchMovie;
