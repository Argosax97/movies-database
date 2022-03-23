import React from "react";
import Loading from "../Loading"
import PageControls from "../MovieListControls";
import "./MovieList.scss";

const MovieList = ({ loading, movies }) => {
  
  const imgPath = "https://image.tmdb.org/t/p/w1280";
  const voteColor = (movie) => {
    if (movie.vote_average > 7) {
      return "green-vote";
    } else if (movie.vote_average <= 7 && movie.vote_average > 5) {
      return "orange-vote";
    } else {
      return "red-vote";
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <section className="movie-list-container">
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="movie-card">
            <div className="poster">
              <img src={imgPath + movie.poster_path} alt={movie.title} />
            </div>
            <div className="title-vote">
              <h3>{movie.title}</h3>
              <span className={voteColor(movie)}>{movie.vote_average}</span>
            </div>
          </div>
        );
      })}
      <PageControls />
    </section>
  );
};
export default MovieList;
