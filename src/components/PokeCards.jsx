import React from "react";

export function PokeCard({ poke }) {
  return (
    <div>
      <h1>{poke.name}</h1>
      <img
        src={poke?.sprites?.front_default ?? poke?.sprites?.back_default}
        alt=""
      />
      <br />
      <img
        src={poke?.sprites?.front_shiny ?? poke?.sprites?.back_shiny}
        alt=""
      />
      <br />
      <a href={poke.videoLink}>link</a>
      <br />
    </div>
  );
}
