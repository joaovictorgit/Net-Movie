import React from "react";

const SeriesScreen = () => {
  const title = JSON.parse(localStorage.getItem("@title"));
  return <div>{title}</div>;
};

export default SeriesScreen;
