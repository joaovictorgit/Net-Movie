import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Search from "../../components/Search/search";
import "./series-style.css";

const SeriesScreen = () => {
  const navigate = useNavigate();
  const [seriesRecommended, setSeriesRecommended] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("recommendations");
  //const [episodes, setEpisodes] = useState([]);
  const api_key = "0db62ecbfbd912a6e452af52373f9031";
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGI2MmVjYmZiZDkxMmE2ZTQ1MmFmNTIzNzNmOTAzMSIsInN1YiI6IjYwYmQxMmY5MThiNzUxMDA0MjhhNWM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1eqp95rqD7ktZf_qfAwkQnyjona-hLeXR-q1_SbZj4k";

  const getSeriesRecommended = async () => {
    if (status !== "search") {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/tv/60735/recommendations?api_key=${api_key}&language=pt-BR&page=1`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            setSeriesRecommended(response.data.results);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=pt-BR&page=1&include_adult=false&query=${search}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            setSeriesRecommended(response.data.results);
            setSearch("");
          });
      } catch (error) {
        console.log("error");
      }
    }
  };

  /*const getEpisodes = async () => {
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/tv/1399/similar?api_key=${api_key}&language=pt-BR&page=1`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setEpisodes(response.data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };*/

  useEffect(() => {
    getSeriesRecommended();
  }, []);

  return (
    <div className="container-series">
      <Header />
      <div className="search-serie">
        <Search
          setStatus={setStatus}
          getMoviesRecommend={getSeriesRecommended}
          status={status}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <h1 className="title-series-recommend">Lista de Séries Recomendadas</h1>
      <div className="series-recommendations">
        {seriesRecommended.map((serie, index) => (
          <div
            className="item-serie"
            key={index}
            onClick={() => {
              navigate("/details");
              localStorage.setItem("@element", JSON.stringify(serie));
              localStorage.setItem("@credit", JSON.stringify("tv"));
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              alt={serie.name}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SeriesScreen;
