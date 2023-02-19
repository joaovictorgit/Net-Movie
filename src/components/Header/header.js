import "./header-style.css";
import { BiCameraMovie } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="container-header">
      <h1 className="title" onClick={() => navigate("/")}>
        <BiCameraMovie size={20} className="icon-movie" /> Net Movie
      </h1>
    </div>
  );
};

export default Header;
