import React, { useState, useContext } from "react";
import { pageContext } from "../Context/pageContext";
import "./Header.scss";

const Header = ({ setMovies }) => {
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const {searchPages,setSearchPages} = useContext(pageContext)
    const [searchValue, setSearchValue] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchValue) {
      fetch(SEARCHAPI + searchValue + "&page=" + searchPages)
        .then((resp) => resp.json())
        .then((data) => {
          setMovies(data.results);
        });
      setSearchValue("");
      setSearchPages(1);
    }
  };

  return (
    <header>
      <h1>Movies Database</h1>
      <form>
        <input
          type="search"
          className="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" onClick={searchHandler}>
          <i className="fas fa-search search-icon" />
        </button>
      </form>
    </header>
  );
};

export default Header;
