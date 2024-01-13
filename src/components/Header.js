import React from "react";

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div class="d-flex flex-row m-auto">
            <i class="fa-solid fa-star fa-2x text-light"></i>
            <div className="text-light h2">{props.title}</div>
          </div>
        </div>
      </nav>
      <div className="text-dark text-center container mt-1">
        {props.description}
      </div>
    </div>
  );
}

export default Header;
