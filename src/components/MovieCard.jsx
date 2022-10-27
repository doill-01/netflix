import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
	
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/movies/${item.id}`);
  };
  const { genreList } = useSelector((state) => state.movie);
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
      }}
      onClick={showDetail}>
      <div className="overlay">
        <h1>{item.title}</h1>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger">
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{item.vote_everage}</span>
          <span>{item.adult ? "청불" : "under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
