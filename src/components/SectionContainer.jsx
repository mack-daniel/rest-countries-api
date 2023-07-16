import React from "react";
import { Link } from "react-router-dom";

const SectionContainer = ({
  flags,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  return (
    <div className="container py-5">
      <Link className="btn btn-lg dark-bg mb-5 px-5" to="/">
        <i class="fa-solid fa-arrow-left me-3"></i>
        Back
      </Link>
      <div className="card bg-transparent text-light">
        <div className="row g-5">
          <div className="col-md-6">
            <img src={flags.svg} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title fs-1">{name}</h5>
              <div className="row my-4">
                <div className="col-md">
                  <h6>
                    Native Name: <span>{nativeName}</span>
                  </h6>
                  <h6>
                    Population: <span>{population.toLocaleString()}</span>
                  </h6>
                  <h6>
                    Region: <span>{region}</span>
                  </h6>
                  <h6>
                    Sub Region: <span>{subregion}</span>
                  </h6>
                  <h6>
                    Capital: <span>{capital}</span>
                  </h6>
                </div>
                <div className="col-md">
                  <h6>
                    Top Level Domain: <span>{topLevelDomain}</span>
                  </h6>
                  <h6>
                    Currencies: <span>{currencies[0].name}</span>
                  </h6>
                  <h6>
                    Languages: {languages.map((language) => language.name)}
                  </h6>
                </div>
              </div>
              <h6 className="d-md-flex gap-4">
                Border Countries:
                {borders &&
                  borders.map((border) => (
                    <div className="border-1 dark-bg py-1 px-3">{border}</div>
                  ))}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
