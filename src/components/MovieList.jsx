import axios from 'axios';
import { useEffect, useState } from 'react';
import options, { baseImageURL } from '../constants/constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const splideOptions = {
        autoWidth:true,
        gap:"10px",
        pagination:false
  };

  return (
    <div className='text-white'>
      <h2 className="text-3xl font-bold mb-4">{genre.name}</h2>
      <Splide options={splideOptions}>
        {movies &&
          movies.map((movie) => (
            <SplideSlide key={movie.id}>
              <Link 
              to={`/detail/${movie.id}`}>
                <img
                  className=" h-full object-cover rounded-lg shadow-lg w-[300px]"
                  src={baseImageURL.concat(movie.backdrop_path)}
                  alt=""
                />
              </Link>
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
};

export default MovieList;
