import "./App.css";
import Card from "./components/Card/Card";
import Select from "./components/Select/Select";
import React, { useEffect, useState } from "react";
import { getPokemonList } from "./components/api/utils";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    async function getData() {
      const list = await getPokemonList();
      setPokemonList(list);
    }

    getData();
  }, []);

  const pokemonNames = pokemonList.map((pokemon) => {
    return (
      <option key={pokemonList.indexOf(pokemon)} value={pokemon.name}>
        {pokemon.name}
      </option>
    );
  });

  const setdisplay = (e) => {
    console.log(e.target.value);
    setCurrent(e.target.value);
  };

  return (
    <React.Fragment>
      <Select onChange={setdisplay}>{pokemonNames}</Select>
      {current}
    </React.Fragment>
  );
}

export default App;
