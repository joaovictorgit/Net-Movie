import "./menu-style.css";

const Menu = ({ setTitle }) => {
  return (
    <div className="container-menu">
      <div
        className="item-menu"
        onClick={() => {
          setTitle("Filme");
        }}
      >
        Filmes
      </div>
      <div
        className="item-menu"
        onClick={() => {
          setTitle("Série");
        }}
      >
        Séries
      </div>
    </div>
  );
};

export default Menu;
