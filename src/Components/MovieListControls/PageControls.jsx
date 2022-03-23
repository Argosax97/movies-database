import React from "react";
import "./PageControls.scss";

const PageControls = () => {
  return (
    <div className="page-controls">
      <button>
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button>
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default PageControls;
