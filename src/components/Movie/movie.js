/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../Header/header";
import { AiFillStar } from "react-icons/ai";
import "./movie-style.css";

import { useEffect, useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { getVideo } from "../../service/request-function";
import axios from "axios";

const Movie = () => {
  const [trailer, setTrailer] = useState();
  const element = JSON.parse(localStorage.getItem("@element"));
  const type_credit = JSON.parse(localStorage.getItem("@credit"));
  const [videos, setVideos] = useState([]);
  const [credits, setCredits] = useState([]);
  const api_key = "0db62ecbfbd912a6e452af52373f9031";
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGI2MmVjYmZiZDkxMmE2ZTQ1MmFmNTIzNzNmOTAzMSIsInN1YiI6IjYwYmQxMmY5MThiNzUxMDA0MjhhNWM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1eqp95rqD7ktZf_qfAwkQnyjona-hLeXR-q1_SbZj4k";

  const loadVideo = (video) => {
    return (
      <div className="video-response">
        <iframe
          width="700"
          height="400"
          src={`https://www.youtube.com/embed/${video.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      </div>
    );
  };

  const getCredits = async () => {
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/${type_credit}/${element.id}/credits?api_key=${api_key}&language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setCredits(response.data.cast);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setVideos(getVideo(element.id));
    getCredits();
  }, []);

  return (
    <div className="container-movie-series">
      <Header />
      <div className="movie-series">
        <div className="container-details">
          <img
            src={`https://image.tmdb.org/t/p/w500${element.backdrop_path}`}
            alt={element.id}
            className="detail-cover"
          />
          <div className="container-poster-details">
            <img
              src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
              alt={element.id}
              className="detail-poster"
            />
            <label>{element.title}</label>
          </div>

          <div className="description">
            <label className="lbl-description">{element.overview}</label>
            <div className="container-credits">
              <span>Elenco: </span>
              {credits.map((credit, index) => (
                <div className="credit" key={index}>
                  {index < 5 && (
                    <div className="credit-person">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                        alt={element.id}
                        className="profile_path"
                      />
                      <label>{credit.name}</label>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="container-average">
              <AiFillStar size={20} color="#FFD700" />
              <span className="average">
                Avalia????o: {parseFloat(element.vote_average).toPrecision(2)} /
                10
              </span>
            </div>
            <div className="trailer" onClick={() => setTrailer(videos[3])}>
              <BsPlayFill size={20} /> Trailer
            </div>
          </div>
        </div>
        <div className="container-trailer">
          {trailer ? loadVideo(trailer) : null}
        </div>
      </div>
    </div>
  );
};

export default Movie;
