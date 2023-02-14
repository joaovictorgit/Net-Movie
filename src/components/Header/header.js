import "./header-style.css";
import Image from "../../images/01.jpg";
import { useEffect, useState } from "react";
import api from "../../service/api";

const Header = () => {
  const [releases, setReleases] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGI2MmVjYmZiZDkxMmE2ZTQ1MmFmNTIzNzNmOTAzMSIsInN1YiI6IjYwYmQxMmY5MThiNzUxMDA0MjhhNWM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1eqp95rqD7ktZf_qfAwkQnyjona-hLeXR-q1_SbZj4k";
  const getMoviesRecommend = async () => {
    const aux = 15;
    const aux_movie = [];
    for (let id = 15; id < aux + 5; id++) {
      await api
        .get(
          `movie/${id}?api_key=0db62ecbfbd912a6e452af52373f9031&language=pt-BR`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          aux_movie.push(response.data);
        });
    }
    setReleases(aux_movie);
  };

  useEffect(() => {
    getMoviesRecommend();
  }, []);

  return (
    <div className="container-header">
      <img src={Image} className="img-background" alt="movie-background" />
      <h1 className="title">Net Movie</h1>
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
    </div>
  );
};

export default Header;
