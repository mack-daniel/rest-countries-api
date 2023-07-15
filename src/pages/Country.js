import React from "react";
import { useParams } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";

const Country = ({ regions }) => {
  const { id } = useParams();

  const details = regions.find((region) => region?.numericCode === id);

  return <div className="App">{<SectionContainer {...details} />}</div>;
};

export default Country;
