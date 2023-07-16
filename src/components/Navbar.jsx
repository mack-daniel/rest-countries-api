import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? "dark-bg" : "bg-light"}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link
          to="/"
          className={`brand ${
            darkMode ? "text-light" : "text-dark"
          } text-decoration-none fs-5`}
        >
          Where in the world?
        </Link>
        <button
          className={`btn ${darkMode ? "text-light" : "text-dark"}`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <i className="fa-solid fa-moon me-3"></i>
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
