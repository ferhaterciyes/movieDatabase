import { actionsTypes } from "../actionTypes";

const initialState = {
  isMoviesLoading: false,
  popularMovies: [],
  genres: [],
  isGenresLoading: false,
  isMoviesError: false,
  İsGenresError: false,
};
const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.SET_MOVIES_LOADING:
      return { ...state, isMoviesLoading: true };

    case actionsTypes.SET_MOVIES_ERROR:
      return { ...state, isMoviesLoading: false, isMoviesError: true };

    case actionsTypes.SET_MOVIES:
      return {
        ...state,
        popularMovies: payload,
        isMoviesLoading: false,
        isMoviesError: false,
      };

    case actionsTypes.SET_GENRES_ERROR:
      return { ...state, İsGenresError: true,
         isGenresLoading: false };

    case actionsTypes.SET_GENRES_LOADING:
      return { ...state, isGenresLoading: true };
    case actionsTypes.SET_GENRES:
      return {
        ...state,
        genres: payload,
        isGenresLoading: false,
        İsGenresError: false,
      };

    default:
      return state;
  }
};

export default movieReducer;
