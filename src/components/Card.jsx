import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  name,
  population,
  region,
  capital,
  flags,
  numericCode,
  darkMode,
}) => {
  return (
    <Link className="col" to={`./country/${numericCode}`}>
      <div className={`card ${darkMode ? "border-0" : "border-1"}`}>
        <img src={flags.svg} className="card-img-top img-thumb" alt="..." />
        <div className={`card-body ${darkMode ? "dark-bg" : ""}`}>
          <h6 className="card-title mb-4">{name}</h6>
          <p className="card-text">
            Population: <span>{population.toLocaleString()}</span>
          </p>
          <p className="card-text">
            Region: <span>{region}</span>
          </p>
          <p className="card-text">
            Capital: <span>{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
