import { useSelector } from "react-redux";
import LoadingHero from "./LoadingHero";
import { Link } from "react-router-dom";
import { baseImageURL } from "../constants/constants";

const Hero = () => {
  const state = useSelector((store) => store);

  const movieIndex = Math.round(Math.random() * 19);
  const randomMovie = !state.isLoading && state.popularMovies[movieIndex];

  /* rastgele bir filme erişme */
  return (
    <div className="flex flex-col md:flex-row p-4">
      {state.isMovieLoading || !randomMovie ? (
        /* Yüklenme devam ediyor veya API'den rastgele film alınamadıysa loading göster */
        <LoadingHero />
      ) : (
        <>
          <div className="md:w-1/2 md:ml-4  text-white text-center mx-4">
            {/* Büyük ekranlarda yarı genişlik ve sol kenar boşluğu */}
            <h1 className="font-bold text-2xl">{randomMovie.title}</h1>
            <p>{randomMovie.overview}</p>
            <p>
              IMDB:{" "}
              <span className="text-[#e79e15b7] font-semibold">
                {randomMovie.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="mt-5">
              <Link
                
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-500"
                to={`/detail/${randomMovie.id}`}
              >
                Filmi İzle
              </Link>
              <Link
                className="bg-blue-600 hover:bg-blue-500 ml-3 px-4 py-2 rounded"
                to={"#"}
              >
                Listeye Ekle
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 md:mr-4 mt-4  md:mt-0">
            {/* Büyük ekranlarda yarı genişlik ve sağ kenar boşluğu */}
            <img
              className="rounded-l drop-shadow-3xl"
              src={baseImageURL.concat(randomMovie.backdrop_path)}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
