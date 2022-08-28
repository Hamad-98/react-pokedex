import "./App.css";
import Card from "./components/Card/Card";
import Select from "./components/Select/Select";
import React, { useEffect, useState } from "react";
import { getPokemonDescription, getPokemonList } from "./components/api/utils";

function App() {
  const [pokemonList, setpokemonList] = useState([]);

  const [current, setCurrent] = useState({});

  useEffect(() => {
    async function getDetailedData() {
      const list = await getPokemonList();
      console.log(list);
      const newArray = [];
      for (let pokemons of list) {
        let url = pokemons.url;
        const data = await fetch(url).then((res) => res.json());
        pokemons = {
          ...pokemons,
          id: data.id,
          picture: data.sprites.front_default,
          description: await getPokemonDescription(data.id),
        };

        newArray.push(pokemons);
      }
      setpokemonList(newArray);
      setCurrent(newArray[0]);
    }

    getDetailedData();
  }, []);

  const pokemonNames = pokemonList.map((pokemon, index) => {
    return (
      <option key={index} value={pokemon.name}>
        {pokemon.name}
      </option>
    );
  });

  const setdisplay = (e) => {
    var result = pokemonList.find((obj) => {
      return obj.name === e.target.value;
    });

    setCurrent(result);
  };

  return (
    <React.Fragment>
      <Select handleChange={setdisplay}>{pokemonNames}</Select>
      <Card current={current} />
    </React.Fragment>
  );
}

export default App;
