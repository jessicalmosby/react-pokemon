import React from 'react';

export default function PokeCard({ pokemon, loading, types }) {
  if (loading) return <p>Please wait longer...</p>;
  return (
    <div className="poke-card">
      {pokemon.map((poke) => (
        <p key={poke._id}>
          {poke.pokemon} {poke.type_1} {poke.type_2}
        </p>
      ))}
    </div>
  );
}
