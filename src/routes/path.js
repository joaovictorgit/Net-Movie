import { Route, Routes } from "react-router-dom";
import App from "../App";
import Movie from "../components/Movie/movie";
import MovieScreen from "../pages/Movies/movie-screen";
import SeriesScreen from "../pages/Series/series-screen";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/details" element={<Movie />} />
      <Route path="/movies" element={<MovieScreen />} />
      <Route path="/series" element={<SeriesScreen />} />
    </Routes>
  );
};

export default Path;
