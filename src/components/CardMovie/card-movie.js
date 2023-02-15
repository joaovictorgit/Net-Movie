import "./card-style.css";
import { useEffect, useState } from "react";

import api from "../../service/api";

const CardMovie = () => {
  const [releases, setReleases] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGI2MmVjYmZiZDkxMmE2ZTQ1MmFmNTIzNzNmOTAzMSIsInN1YiI6IjYwYmQxMmY5MThiNzUxMDA0MjhhNWM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1eqp95rqD7ktZf_qfAwkQnyjona-hLeXR-q1_SbZj4k";
  const getMoviesRecommend = async () => {
    const id = 15;
    await api
      .get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=0db62ecbfbd912a6e452af52373f9031&language=pt-BR&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setReleases(response.data.results);
      });
  };

  useEffect(() => {
    getMoviesRecommend();
  }, []);

  return (
    <>
      <h4 className="recommendations">Recomendações</h4>
      <div className="container-recommendations">
        {releases.map((release, index) => (
          <div className="item" key={index}>
            <img
              className="image-poster"
              src={`https://image.tmdb.org/t/p/w500${release.poster_path}`}
              alt={release.original_title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardMovie;
