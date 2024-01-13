import React from "react";
import Header from "../../components/Header";

import "./project3.css";
function Project3() {
  return (
    <div>
      <Header title={"User Feed App"} icon={""} />
      <div className="container">
        <div className="d-flex flex-column m-auto col-6">
          <div className="text-center projectTitle">User Feed App</div>
          <div className="user-details">
            <h3>userid</h3>
            <div className="bg-white">
              <div className="upper d-flex justify-content-between">
                <div className="left">
                  <h3>User name</h3>
                  <h3>Email: info@website.com</h3>
                </div>
                <img
                  src="https://avatars.githubusercontent.com/u/61490516?v=4"
                  alt="avatar"
                  className="avatar"
                />
              </div>
              <div className="bg-white d-flex">
                <div className="col-6">left</div>
                <div className="col-6">right</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Description">
          <h2 className="text-center my-5">Project Description</h2>
          <p className="lead text-justify">
            This project is a social media application that allows users to post
            updates about their daily life. Users can also comment on other
            users' posts.
          </p>
          <a href="/" className="btn btn-success">
            <i className="fa-solid fa-chevron-left"></i> Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project3;
