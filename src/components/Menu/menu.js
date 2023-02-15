import "./menu-style.css";

const items = [
  {
    id: 1,
    nome: "Recomendações",
  },
  {
    id: 2,
    nome: "Filmes",
  },
  {
    id: 3,
    nome: "Séries",
  },
];

const Menu = () => {
  return (
    <div className="container-menu">
      {items.map((item) => (
        <div className="item-menu" key={item.id} id={item.id}>
          {item.nome}
        </div>
      ))}
    </div>
  );
};

export default Menu;
