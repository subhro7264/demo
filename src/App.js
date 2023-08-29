import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import Loading from "./components/UI/Loading";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const fetchMOviesHandler = async () => {
  //  await fetch("https://swapi.dev/api/films")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedMovies=data.results.map(movieData=>{
  //         return{
  //           id:movieData.episode_id,
  //           title:movieData.title,
  //           openingText:movieData.opening_crawl,
  //           releaseDate:movieData.release_date,
  //         }
  //       })
  //       setMovies(transformedMovies);
  //     });
  // };
  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);

    if (movies) {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <section>
        <Button onClick={fetchMoviesHandler} onChange={isLoading}>
          {" "}
          Fetch Movies
        </Button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <Loading />}
      </section>
    </React.Fragment>
  );
}

export default App;
