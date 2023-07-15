import React from "react";

const SearchItem = ({ setSelectedRegions, serchInput }) => {
  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center gap-5 ">
        {/* search */}
        <div className="input-group w-25 ">
          <span className="input-group-text border-0 dark-bg">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="form-control dark-bg border-0 p-3"
            placeholder="Search for a country..."
            onChange={(e) => serchInput(e.target.value)}
          />
        </div>

        {/* select */}
        <select
          className="form-select w-25 border-0 p-3 dark-bg"
          onChange={(e) => setSelectedRegions(e.target.value)}
        >
          <option selected>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Ocenia">Oceania</option>
        </select>
      </header>
    </div>
  );
};

export default SearchItem;
