import "./header-style.css";
import { BiCameraMovie } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navigateScreen = (title) => {
    if (title === "Filmes") {
      navigate("/movies");
      localStorage.setItem("@title", JSON.stringify(title));
    } else {
      navigate("/series");
      localStorage.setItem("@title", JSON.stringify(title));
    }
  };
  return (
    <div className="container-header">
      <h1 className="title" onClick={() => navigate("/")}>
        <BiCameraMovie size={20} className="icon-movie" /> Net Movie
      </h1>
      <div className="menu">
        <span onClick={() => navigateScreen("Filmes")}>Filmes</span>
        <span onClick={() => navigateScreen("Séries")}>Séries</span>
      </div>
    </div>
  );
};

export default Header;
