import React from "react";
import { Card } from "react-bootstrap";

import "./Card.css";

const Movie = ({ title, description, rating, Image }) => {
  return (
    <Card className="movie-card  bg-dark text-white  ">
      <Card.Body>
        <Card.Title className="text-warning ">{title}</Card.Title>
        <Card.Img className="image-card" variant="top" src={Image} />
        <Card.Text>Description: {description}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
