import React, { useState } from "react";
import axios from "axios";

//디테일페이지의 영화 설명란

const MovieDetail = ({ item }) => {
  console.log("ddd", item);
  const [movieDetails, setMovieDetails] = React.useState(null);
  async function getMovieDetailsFromAPI(id) {
    let API_key = process.env.REACT_APP_APIKEY;
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_key}&language=en-US`;
    let res = await axios.get(url);
    setMovieDetails(res.data);

  return (
<div>dd</div>
  );
};
}

export default MovieDetail;
