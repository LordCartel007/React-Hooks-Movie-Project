import React from "react";

import Movie from "./Movie";

import { Row, Col, Container } from "react-bootstrap";

// this is the component that will display the movies
const MovieList = ({ movies }) => {
  return (
    <Container>
      <Row>
        {movies.map((eachmovie) => {
          return (
            <Col
              key={eachmovie.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4"
            >
              <Movie
                title={eachmovie.title}
                description={eachmovie.description}
                rating={eachmovie.rating}
                Image={eachmovie.Image}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MovieList;
