import React from 'react';

export default function PokeCard({ pokemon }) {
  return (
    <div className="poke-card">
      {pokemon.map((poke) => (
        <p key={poke._id}>{poke.pokemon}</p>
      ))}
    </div>
  );
}
