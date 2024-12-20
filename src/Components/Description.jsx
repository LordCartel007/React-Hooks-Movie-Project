import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Description = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the movie with the matching id
  const movie = movies.find((movie) => movie.id === parseInt(id, 10));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{movie.title}</h2>
      <h3> {movie.rating}</h3>
      <img width="560" height="315" src={movie.Image} alt="" />
      <p>{movie.description}</p>

      <iframe
        width="800"
        height="500"
        src={movie.trailer}
        title={`Trailer for ${movie.title}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Description;
