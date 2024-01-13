import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header
        title="React 30"
        description="30 React JS projects for practice"
      />
      <div className="container mt-3">
        <ul style={{ columnCount: 2 }}>
          <li>
            <a href="/project1">Project 1 Click Counter</a>
          </li>
          <li>
            <a href="/project2">Project 2 Digital Clock</a>
          </li>
          <li>
            <a href="/project3">Project 3 User Feed App</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
