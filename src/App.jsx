import React, { useState } from "react";
import "./App.scss";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import useFetch from "./Data/useFentch/useFetch";

const API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=04c35731a5ee918f014970082a0088b1&query=";

const App = () => {
  const [genresId, setGenresId] = useState([]);
  const { loading, movies, setMovies } = useFetch(
    API + "&with_genres=" + genresId
  );
  return (
    <main>
      <Header setMovies={setMovies} genresId={genresId} />
      <div className="container">
        <Categories setGenresId={setGenresId} genresId={genresId} />
        <MovieList loading={loading} movies={movies} genresId={genresId} />
      </div>
    </main>
  );
};

export default App;
