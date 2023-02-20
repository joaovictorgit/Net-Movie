/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import CardMovie from "../../components/CardMovie/card-movie";
import Header from "../../components/Header/header";
import Search from "../../components/Search/search";
import Slide from "../../components/Slide/slide";
import "./home-style.css";

const HomeScreen = () => {
  const [title, setTitle] = useState("Recomendações");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("recommendations");
  const [releases, setReleases] = useState([]);
  const api_key = "0db62ecbfbd912a6e452af52373f9031";
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGI2MmVjYmZiZDkxMmE2ZTQ1MmFmNTIzNzNmOTAzMSIsInN1YiI6IjYwYmQxMmY5MThiNzUxMDA0MjhhNWM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1eqp95rqD7ktZf_qfAwkQnyjona-hLeXR-q1_SbZj4k";
  const getMoviesRecommend = async (status) => {
    if (status !== "search") {
      try {
        const id = 15;
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}/${status}?api_key=${api_key}&language=pt-BR&page=1`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            setReleases(response.data.results);
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
            setReleases(response.data.results);
            setSearch("");
            setTitle(search);
          });
      } catch (error) {
        console.log("error");
      }
    }
  };

  useEffect(() => {
    getMoviesRecommend(status);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = releases.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="main">
      <Header />
      <Slide />
      <div className="container-home">
        <div className="container-searc-menu">
          <Search
            setStatus={setStatus}
            getMoviesRecommend={getMoviesRecommend}
            status={status}
            search={search}
            setSearch={setSearch}
          />
        </div>

        <CardMovie
          title={title}
          releases={currentPosts}
          totalPosts={releases.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
/*
<div className="container-category">
          <label>Categorias: </label>
          <select className="select">
            <option className="option" value="todas">
              Todas
            </option>
            <option className="option" value="drama">
              Drama
            </option>
            <option className="option" value="comedia">
              Comédia
            </option>
            <option className="option" value="romance">
              Romance
            </option>
          </select>
        </div>

*/
