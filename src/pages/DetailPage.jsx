import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import options from "../constants/constants";
import LoadingHero from './../components/LoadingHero';

const DetailPage = () => {
  const [detailVideo, setDetailVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=tr-TR`, options)
      .then((res) => setDetailVideo(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  if (!detailVideo) {
    return <LoadingHero />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-800 via-pink-700 to-red-600">
      <div className="max-w-screen-lg w-full bg-white p-8 rounded-lg shadow-md flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full overflow-hidden rounded-md shadow-lg">
          <img
            className="w-full h-full object-cover rounded-md"
            src={`https://image.tmdb.org/t/p/w500/${detailVideo.poster_path}`}
            alt={detailVideo.title}
          />
        </div>
        <div className="md:w-1/2 w-full pl-8 text-white">
          <h2 className="text-4xl font-bold mb-4">{detailVideo.title}</h2>
          <p className="text-gray-800 text-lg mb-6">{detailVideo.overview}</p>
          <div className="mb-6">
            <p className="text-gray-800 text-lg">
              <strong>Vizyon Tarihi:</strong> {detailVideo.release_date}
            </p>
            <p className="text-gray-800 text-lg">
              <strong>Süre:</strong> {detailVideo.runtime} dakika
            </p>
            <p className="text-gray-800 text-lg">
              <strong>Oy Ortalaması:</strong> <span className="text-[#d38e0ed5]">{(detailVideo.vote_average.toFixed(1))}</span>
            </p>
          </div>
          <p className="text-gray-800 text-xl">Daha fazla bilgi ve detaylar için: {detailVideo.homepage}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
