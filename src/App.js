import "./App.css";
import Menu from "./Components/Menu";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import Results from "./Components/Results";

function App() {
  const [language, setLanguage] = useState("es");

  return (
    <div className='App'>
      <header className='App-header'>
        <SearchBar  language={language}></SearchBar>
        <Routes>
          <Route
            exact
            path='/'
            element={<Menu language={language} setLanguage={setLanguage} />}
          ></Route>
          <Route
            path='/results/:location'
            element={<Results language={language} setLanguage={setLanguage} />}
          ></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;