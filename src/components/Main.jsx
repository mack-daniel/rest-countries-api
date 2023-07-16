import React, { useState } from "react";
import SearchItem from "./SearchItem";
import Card from "./Card";

const Main = ({ regions, darkMode }) => {
  const [searchRegions, setSearchRegions] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const serchInput = (searchVal) => {
    setSearchRegions(searchVal);
    if (searchRegions !== "") {
      const filteredData = regions.filter((item) => {
        return Object.values(item).join("").toLowerCase().includes(searchVal);
      });

      setFilteredResults(filteredData);
    } else {
      setFilteredResults(regions);
    }
  };

  return (
    <main className="py-5">
      <div className="container">
        <SearchItem
          setSearchRegions={setSearchRegions}
          serchInput={serchInput}
          darkMode={darkMode}
        />
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          {searchRegions !== ""
            ? filteredResults.map((item) => (
                <Card {...item} key={item.numericCode} darkMode={darkMode} />
              ))
            : regions
                .slice(regions.length - 8)
                .map((item) => (
                  <Card {...item} key={item.numericCode} darkMode={darkMode} />
                ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
