import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Country from "./pages/Country";
import jsonData from "./data/data.json";

function App() {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const loadData = () => JSON.parse(JSON.stringify(jsonData));
    setRegions(loadData);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Main regions={regions} setRegions={setRegions} />}
          />
          <Route path="/country/:id" element={<Country regions={regions} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
