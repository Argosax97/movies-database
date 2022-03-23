import React from "react";
import "./Categories.scss";
import { GenresData } from "../../Data/GenresData/GenresData";

const Categories = ({ genresId, setGenresId }) => {
  const selcetGender = (genre) => {
    if (genresId === genre.id) {
      setGenresId("");
    }

    setGenresId(genre.id);
  };
  
  return (
    <section className="categories">
      {GenresData.map((el, idx) => (
        <div key={idx} className="categ-names">
          <h2
            className={genresId===el.id ? "toggle" : ""}
            onClick={() => selcetGender(el)}
          >
            {el.name}
          </h2>
        </div>
      ))}

      <div className="socials">
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-google"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Categories;
