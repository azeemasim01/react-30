import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

import "./project2.css";

function Project2() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-3">
      <Header title={"Digital Clock"} icon={""} />
      <div className="container timecontainer">
        <h1 className="time">{time.toLocaleTimeString()}</h1>
      </div>
      <div className="container">
        <div className="d-flex flex-row m-auto"></div>
        <div className="Description">
          <h2 className="text-center my-5">Project Description</h2>
          <p className="lead text-justify">
            This project is a digital clock that displays the current date and
            time. It has been built using React . The user interface displays
            the current date and time on the screen.
          </p>
          <a href="/" className="btn btn-success">
            <i className="fa-solid fa-chevron-left"></i> Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project2;
