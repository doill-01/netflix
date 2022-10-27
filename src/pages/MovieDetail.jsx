import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";

//디테일페이지의 영화 설명란

const MovieDetail = ({ item }) => {
  console.log("ddd", item);
  return (
    <div className="product-large-img">
      <img
        src={`https://image.tmdb.org/t/p/original//${item.poster_path}`}
        alt=""
      />
    </div>
  );
};

export default MovieDetail;
