import { AiOutlineSearch } from "react-icons/ai";
import CardMovie from "../../components/CardMovie/card-movie";
import Header from "../../components/Header/header";
import Menu from "../../components/Menu/menu";

import "./home-style.css";
const HomeScreen = () => {
  return (
    <div className="main">
      <Header />
      <div className="container-home">
        <div className="container-searc-menu">
          <Menu />
          <div className="container-search">
            <AiOutlineSearch size={20} className="icon" />
            <input type="text" placeholder="Pesquisar" className="search" />
          </div>
        </div>
        <CardMovie />
      </div>
    </div>
  );
};

export default HomeScreen;
