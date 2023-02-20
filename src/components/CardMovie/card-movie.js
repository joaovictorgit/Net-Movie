import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination/pagination";

import "./card-style.css";

const CardMovie = (props) => {
  const {
    title,
    releases,
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
  } = props;
  const navigate = useNavigate();

  return (
    <>
      <h4 className="recommendations">Lista de {title}</h4>
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="container-recommendations">
        {releases.map((release, index) => (
          <div
            className="item"
            key={index}
            onClick={() => {
              navigate("/details");
              localStorage.setItem("@element", JSON.stringify(release));
              localStorage.setItem("@credit", JSON.stringify("movie"));
            }}
          >
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
