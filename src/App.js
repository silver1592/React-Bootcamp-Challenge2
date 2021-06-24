import React from "react";
import { PokeCard } from "./components/PokeCards";
import { mockPokemonsData } from "./mock/pokeData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>2o. Challenge: Loops</h1>
      {mockPokemonsData.sort(CompareFunction).map((poke) => (
        <PokeCard poke={poke} />
      ))}
    </div>
  );
}

function CompareFunction(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}
