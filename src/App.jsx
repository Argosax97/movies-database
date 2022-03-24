import React, { useState } from "react";
import { useRef } from "react/cjs/react.production.min";
import "./App.scss";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import useFetch from "./Data/useFentch/useFetch";
import { pageContext } from "./Components/Context/pageContext";

const API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=04c35731a5ee918f014970082a0088b1&query=";

const App = () => {
  const [genresId, setGenresId] = useState();
  const [mainPages, setMainPages] = useState(1);
  const [searchPages, setSearchPages] = useState(1);
  const { loading, movies, setMovies } = useFetch(
    API + "&with_genres=" + genresId + "&page=" + mainPages
  );

  return (
    <main>
      <pageContext.Provider
        value={{ mainPages, setMainPages, searchPages, setSearchPages }}
      >
        <Header
          setMovies={setMovies}
          genresId={genresId}
        />
        <div className="container">
          <Categories setGenresId={setGenresId} genresId={genresId} />
          <MovieList loading={loading} movies={movies} genresId={genresId} />
        </div>
      </pageContext.Provider>
    </main>
  );
};

export default App;
