import MovieList from "./Components/MovieList";
import React from "react";
import Filter from "./Components/Filter";
import { useState, useEffect } from "react";
import movie from "./Movie";
import { Container } from "react-bootstrap";
import AddMovie from "./Components/AddMovie";

// this is the main component that will hold all the other components
// setting use state to hold the original movies and the filtered movies
function App() {
  const [originalMovies, setOriginalMovies] = useState(movie);
  const [filteredMovies, setFilteredMovies] = useState(originalMovies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  useEffect(() => {
    const filtered = originalMovies.filter((eachMovie) => {
      const matchesTitle = filterTitle
        ? eachMovie.title.toLowerCase().includes(filterTitle.toLowerCase())
        : true;

      const matchesRating = filterRating
        ? eachMovie.rating === filterRating
        : true;

      return matchesTitle && matchesRating;
    });
    setFilteredMovies(filtered);
  }, [originalMovies, filterRating, filterTitle]);

  const titleChangeHandler = (title) => {
    title ? setFilterTitle(title) : setFilterTitle("");
  };

  const ratingChangeHandler = (rating) => {
    rating ? setFilterRating(Number(rating)) : setFilterRating(0);
  };

  const addNewMovie = (newMovie) => {
    // spreading original movie and keeping it and adding the new movie we created
    setOriginalMovies([...originalMovies, newMovie]);
  };

  // returning the components
  return (
    <div className="bg-black">
      <Container>
        <AddMovie onAddMovie={addNewMovie} />
        <Filter
          onTitleChange={titleChangeHandler}
          onRatingChange={ratingChangeHandler}
        />
        <MovieList movies={filteredMovies} />
      </Container>
    </div>
  );
}

export default App;
