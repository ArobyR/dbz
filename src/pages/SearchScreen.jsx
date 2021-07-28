import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [inputValue, setInputValue] = useState(q);
  const [character, setCharacter] = useState([]);


  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${inputValue}`);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const getCharacters = () => {
    if (inputValue.trim() !== "") {
      const value = inputValue.toLocaleLowerCase();
      const characters = Characters.filter((character) =>
        character.name.toLocaleLowerCase().includes(value)
      );
      console.log(characters);
      setCharacter(characters);
    } else {
      setCharacter([]);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [q]);

  return (
    <div className="container">
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleOnSubmit}>
            <label htmlFor="" className="w-100 form-label">
              Character:{" "}
              <input
                type="text"
                className="form-control"
                name=""
                onChange={handleOnChange}
                placeholder="Name character:"
                autoComplete="off"
              />
            </label>
            <button type="submit" className="btn btn-info w-100">
              Search
            </button>
          </form>
        </div>
        <div className="col-6">
          <h2>Results: {character.length}</h2>
          {character.length === 0 && (
            <div className="alert alert-warning text-center">
              Please Search a character
            </div>
          )}
          {character.map((ch) => (
            <Card key={ch.id} {...ch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SearchScreen);
