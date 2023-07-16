import React from "react";
import { useParams } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";

const Country = ({ regions, darkMode }) => {
  const { id } = useParams();

  const details = regions.find((region) => region?.numericCode === id);

  return (
    <div className={`${darkMode ? "App" : "light-bg"}`}>
      {<SectionContainer {...details} />}
    </div>
  );
};

export default Country;
