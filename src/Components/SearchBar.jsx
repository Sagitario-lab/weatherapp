import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/SearchBar.css";

export function SearchBar({language}) {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    let location = e.target.keyWord.value.trim();
 
    navigate(`/results/${location}`);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <input type="text" placeholder={language === 'es' ? ('Buscar') : ('search')} name="keyWord" className="input"></input>
      <button type="submit" className="submit-btn">
      {language === 'es' ? (<>Buscar</>) : (<>Search</>)}
      </button>
    </form>
  );
}

export default SearchBar;
