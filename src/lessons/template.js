import React, { useState } from "react";
import Header from "../components/Header";

function template() {
  return (
    <div>
      <Header title={"Digital Clock"} icon={""} />
      <div className="container">
        <div className="d-flex flex-row m-auto"></div>
        <div className="Description">
          <h2 className="text-center my-5">Project Description</h2>
          <p className="lead text-justify">Description goes here.</p>
          <a href="/" className="btn btn-success">
            <i className="fa-solid fa-chevron-left"></i> Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default template;
