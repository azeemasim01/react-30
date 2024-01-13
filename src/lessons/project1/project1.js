import React, { useState } from "react";
import Header from "../../components/Header";

function Project1() {
  const [clicker, setClicker] = useState(0);

  return (
    <div>
      <Header title={"Clicker"} />
      <div className="container">
        <h1>{clicker}</h1>
        <div className="d-flex flex-row m-auto">
          <button
            className="btn btn-primary"
            onClick={() => setClicker(clicker + 1)}
          >
            +
          </button>
          <button
            id="resetBtn"
            className="ml-3 btn btn-warning"
            onClick={() => setClicker(0)}
          >
            <i class="fa-solid fa-arrows-rotate fa-2x"></i>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setClicker(Math.max(0, clicker - 1))}
          >
            -
          </button>
        </div>
        <div className="Description">
          <h2 className="text-center my-5">Project Description</h2>
          <p className="lead text-justify">
            This project is a simple click counter built using{" "}
            <i class="fa-brands fa-react"></i> It was created to demonstrate
            knowledge of how to build and deploy applications with{" "}
            <i class="fa-brands fa-react"></i> CLicking on + button will
            increment the clicker state variable and clicking on - button will
            decrement the same variable. Clicking on reset button will reset the
            value.
          </p>
          <a href="/" className="btn btn-success">
            <i className="fa-solid fa-chevron-left"></i> Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project1;
