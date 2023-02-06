import React, { useState } from "react";
import Intro from "./Intro";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovieHandler = () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.results.map((movieData) => {
          return {
            title: movieData.title,
            id: movieData.episode_id,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedData);
      });
  };

  return (
    <React.Fragment>
      <Intro></Intro>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
