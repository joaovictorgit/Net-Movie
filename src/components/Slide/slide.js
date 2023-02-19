/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./slide-style.css";

const Slide = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = 5;
  const api_key = "0db62ecbfbd912a6e452af52373f9031";
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGI2MmVjYmZiZDkxMmE2ZTQ1MmFmNTIzNzNmOTAzMSIsInN1YiI6IjYwYmQxMmY5MThiNzUxMDA0MjhhNWM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1eqp95rqD7ktZf_qfAwkQnyjona-hLeXR-q1_SbZj4k";

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(movies) || 5 <= 0) {
    return null;
  }
  const getMoviesSlide = () => {
    try {
      let id = 15;
      let aux = [];
      for (id; id < 15 + 5; id++) {
        axios
          .get(
            `
        https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=pt-BR`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            aux.push(response.data);
          });
      }
      setMovies(aux);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (date) => {
    const aux = date.split("-");
    const reverse_date = aux.reverse();
    const res = reverse_date.join("/");
    return res;
  };

  useEffect(() => {
    getMoviesSlide();
  }, []);

  return (
    <div className="slider">
      <div className="container-slider">
        <BsChevronCompactLeft className="left-arrow" onClick={prevSlide} />
        <BsChevronCompactRight className="right-arrow" onClick={nextSlide} />
        {movies.map((movie, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.id}
                className="image-slider"
              />
            )}
            <div className="container-info">
              <img
                className="image-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.id}
                onClick={() => {
                  navigate("/details");
                  localStorage.setItem("@element", JSON.stringify(movie));
                }}
              />
              <label>{movie.title}</label>
              <span>{formatDate(movie.release_date)}</span>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Slide;
