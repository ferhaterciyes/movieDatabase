import { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPopular } from "../redux/actions/movieActions";
import { actionsTypes } from "../redux/actionTypes";
import MovieList from "./../components/MovieList";
import LoadingMovieList from "../components/LoadingMovieList";

import SearchForm from "../components/SearchForm";


const MainPage = () => {
  const state = useSelector((store) => store);


  const dispatch = useDispatch();
  useEffect(() => {
    /* filmler için yükleniyor bileşenini aktif eder */
    dispatch({ type: actionsTypes.SET_MOVIES_LOADING });
    /* populer filmleri al VE Stora aktar*/
    dispatch(getPopular());

    dispatch({ type: actionsTypes.SET_GENRES_LOADING });

    dispatch(getGenres());

    /* türleti al */
  }, []);
  return (
    <div>
      <SearchForm />
      <Hero />

      {state.isGenresLoading ? (
        <LoadingMovieList />
      ) : state.isGenresError ? (
        <p>Üzgünüz hata oluştu !</p>
      ) : (
        state.genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
      )}
    </div>
  );
};

export default MainPage;
