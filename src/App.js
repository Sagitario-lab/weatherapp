import "./App.css";
import Menu from "./Components/Menu";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import Results from "./Components/Results";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar></SearchBar>
        <Routes>
          <Route exact path="/" element={<Menu />}></Route>
          <Route path="/results/:location" element={<Results />}></Route>
        </Routes> 
      </header>
    </div>
  );
}

export default App;
