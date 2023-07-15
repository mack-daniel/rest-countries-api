import React from "react";

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
}) => {
  return (
    <div className="container py-5">
      <div className="card mb-3 bg-transparent text-light">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={flags?.svg}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <div className="row my-4">
                <div className="col-md">
                  <h6>
                    Native Name: <span>{nativeName}</span>
                  </h6>
                  <h6>
                    Population: <span>{population}</span>
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
                    Languages: {languages?.map((language) => language.name)}
                  </h6>
                </div>
              </div>
              <h6>Border Countries: </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
