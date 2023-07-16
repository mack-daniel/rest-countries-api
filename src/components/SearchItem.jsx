import React from "react";

const SearchItem = ({ serchInput, darkMode }) => {
  return (
    <header className="d-md-flex justify-content-between align-items-center gap-5 ">
      {/* search */}
      <div className="input-group">
        <span
          className={`input-group-text  ${
            darkMode ? "dark-bg border-0" : "border-1"
          }`}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          className={`form-control ${
            darkMode
              ? "form-control-dark dark-bg border-0"
              : "form-control border-1"
          }  p-3`}
          placeholder="Search for a country..."
          onChange={(e) => serchInput(e.target.value)}
        />
      </div>

      {/* select */}
      <select
        className={`form-select  p-3 ${
          darkMode
            ? "form-select-dark dark-bg border-0"
            : "form-select-light border-1"
        }`}
        onChange={(e) => serchInput(e.target.value)}
      >
        <option selected>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="ocean">Oceania</option>
      </select>
    </header>
  );
};

export default SearchItem;
