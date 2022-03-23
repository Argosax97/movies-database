import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  };
  // getMovie(API_URL +   "&with_genres=" + encodeURI(currentGenreID.join(",")));

  useEffect(() => {
    getMovies();
  }, [url]);
  return { loading, movies, setMovies };
};

export default useFetch;
