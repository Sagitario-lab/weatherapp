import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/SearchBar.css";

export function SearchBar() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    let location = e.target.keyWord.value.trim();
    console.log(location);
    navigate(`/results/${location}`);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <input type="text" placeholder="Location..." name="keyWord" className="input"></input>
      <button type="submit" className="submit-btn">Search</button>
    </form>
  );
}

export default SearchBar;
