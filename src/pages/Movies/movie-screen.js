import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Search from "../../components/Search/search";
import "./movies-style.css";
const MovieScreen = () => {
  const navigate = useNavigate();
  const [moviesRecommended, setMoviesRecommended] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("recommendations");
  const api_key = "0db62ecbfbd912a6e452af52373f9031";
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGI2MmVjYmZiZDkxMmE2ZTQ1MmFmNTIzNzNmOTAzMSIsInN1YiI6IjYwYmQxMmY5MThiNzUxMDA0MjhhNWM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1eqp95rqD7ktZf_qfAwkQnyjona-hLeXR-q1_SbZj4k";

  const getMoviesesRecommended = async () => {
    if (status !== "search") {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/15/similar?api_key=${api_key}&language=pt-BR&page=1`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            setMoviesRecommended(response.data.results);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=pt-BR&page=1&include_adult=false&query=${search}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            setMoviesRecommended(response.data.results);
            setSearch("");
          });
      } catch (error) {
        console.log("error");
      }
    }
  };

  useEffect(() => {
    getMoviesesRecommended();
  });

  return (
    <div className="container-movies">
      <Header />
      <div className="search-movie">
        <Search
          setStatus={setStatus}
          getMoviesRecommend={getMoviesesRecommended}
          status={status}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <h1 className="title-movies-recommend">Lista de Filmes Recomendados</h1>
      <div className="movies-recommendations">
        {moviesRecommended.map((movie, index) => (
          <div
            className="item-movie"
            key={index}
            onClick={() => {
              navigate("/details");
              localStorage.setItem("@element", JSON.stringify(movie));
              localStorage.setItem("@credit", JSON.stringify("movie"));
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MovieScreen;
