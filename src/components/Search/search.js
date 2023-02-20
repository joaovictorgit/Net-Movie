import { FaSearch } from "react-icons/fa";
import "./search-style.css";

const Search = ({
  setStatus,
  getMoviesRecommend,
  status,
  search,
  setSearch,
}) => {
  return (
    <div className="container-search">
      <FaSearch
        size={20}
        className="icon"
        onClick={() => {
          setStatus("search");
          getMoviesRecommend(status);
        }}
      />
      <input
        type="text"
        placeholder="Pesquisar"
        className="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
