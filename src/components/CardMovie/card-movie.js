import { useNavigate } from "react-router-dom";
import "./card-style.css";

const CardMovie = ({ title, releases }) => {
  const navigate = useNavigate();
  return (
    <>
      <h4 className="recommendations">Lista de {title}</h4>
      <div className="container-recommendations">
        {releases.map((release, index) => (
          <div
            className="item"
            key={index}
            onClick={() => {
              navigate("/details");
              localStorage.setItem("@element", JSON.stringify(release));
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
