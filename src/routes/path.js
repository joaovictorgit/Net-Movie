import { Route, Routes } from "react-router-dom";
import App from "../App";
import Movie from "../components/Movie/movie";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/details" element={<Movie />} />
    </Routes>
  );
};

export default Path;
