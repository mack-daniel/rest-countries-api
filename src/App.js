import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Country from "./pages/Country";
import jsonData from "./data/data.json";

function App() {
  const [regions, setRegions] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const loadData = () => JSON.parse(JSON.stringify(jsonData));
    setRegions(loadData);
  }, []);

  return (
    <div className={`${darkMode ? "App" : "light-bg"}`}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                regions={regions}
                setRegions={setRegions}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/country/:id"
            element={<Country regions={regions} darkMode={darkMode} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
