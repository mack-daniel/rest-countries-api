import React, { useState } from "react";
import SearchItem from "./SearchItem";
import Card from "./Card";

const Main = ({ regions, setRegions }) => {
  // const [selectedRegions, setSelectedRegions] = useState("");
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
          // setSelectedRegions={setSelectedRegions}
          setSearchRegions={setSearchRegions}
          serchInput={serchInput}
        />
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          {searchRegions !== ""
            ? filteredResults.map((item) => (
                <Card {...item} key={item.numericCode} />
              ))
            : regions
                .slice(regions.length - 8)
                .map((item) => <Card {...item} key={item.numericCode} />)}
        </div>
      </div>
    </main>
  );
};

export default Main;
