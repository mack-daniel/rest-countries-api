import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar dark-bg">
      <div className="container d-flex justify-content-between align-items-center">
        <a href="#" className="brand text-light text-decoration-none fs-5">
          Where in the world?
        </a>
        <button className="btn text-light">
          <i className="fa-solid fa-moon me-3"></i>
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
