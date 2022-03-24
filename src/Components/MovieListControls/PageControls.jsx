import React, { useContext } from "react";
import { pageContext } from "../Context/pageContext";
import "./PageControls.scss";

const PageControls = () => {
  const { mainPages, setMainPages } =
    useContext(pageContext);

  const pageLeft = () => {
    if (mainPages > 1) {
      setMainPages((mainPages) => mainPages - 1);
    }
    console.log(mainPages);
  };
  const pageRight = () => {
    if (mainPages < 25) {
      setMainPages((mainPages) => mainPages + 1);
    }
    console.log(mainPages);
  };
  return (
    <div className="page-controls">
      <button onClick={pageLeft}>
        <i className="fa-solid fa-arrow-left"></i>
        <b> {mainPages > 1 && mainPages - 1} </b>
      </button>
      <button onClick={pageRight}>
        <b>{mainPages < 25 && mainPages + 1} </b>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default PageControls;
