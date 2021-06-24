import React from "react";
import { mockPokemonsData } from "../mock/pokeData";

export function PokeCard() {
  let poke = mockPokemonsData[0];

  return (
    <div>
      <h1>{poke.name}</h1>
      <img src={poke.sprites.front_default} alt="" />
      <br />
      <img src={poke.sprites.front_shiny} alt="" />
      <br />
      <a href={poke.videoLink}>link</a>
      <br />
    </div>
  );
}
