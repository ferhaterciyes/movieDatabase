import axios from "axios";
import options from "./../../constants/constants.js";
import { actionsTypes } from "./../actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getPopular = () => (dispatch) => {
  axios
    .get("/movie/popular", options)
    .then((res) =>
      dispatch({ type: actionsTypes.SET_MOVIES, payload: res.data.results }),
    )
    .catch((err) => dispatch({ type: actionsTypes.SET_MOVIES_ERROR }));
};
/* tür verilerini al ve stora aktar */
 export const getGenres =()=>(dispatch)=>{
  axios.get("/genre/movie/list",options)
  .then((res)=>dispatch({type:actionsTypes.SET_GENRES , payload:res.data.genres}))
  .catch((res)=>dispatch({type:actionsTypes.SET_GENRES_ERROR}))
 }