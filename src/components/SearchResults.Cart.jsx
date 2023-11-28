
import { Link } from "react-router-dom";



const MovieCard = ({ movie }) => {
    return (
        <div className="h-[350px] flex gap-3">
      <Link to={`/detail/${movie.id}`} className="flex h-full ">
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
        </div>

    );
  };
  
 export default MovieCard;
  