import React from "react";

const MovieScreen = () => {
  const title = JSON.parse(localStorage.getItem("@title"));
  return <div>{title}</div>;
};

export default MovieScreen;
