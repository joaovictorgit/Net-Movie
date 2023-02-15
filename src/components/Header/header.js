import "./header-style.css";
import Image from "../../images/01.jpg";

const Header = () => {
  return (
    <div className="container-header">
      <img src={Image} className="img-background" alt="movie-background" />
      <h1 className="title">Net Movie</h1>
    </div>
  );
};

export default Header;
