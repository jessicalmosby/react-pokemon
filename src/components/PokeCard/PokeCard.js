import React from 'react';

export default function PokeCard({ pokemon, loading }) {
  if (loading) return <p>Loading...</p>;
  return (
    <div className="poke-card">
      {pokemon.map((poke) => (
        <p key={poke._id}>{poke.pokemon}</p>
      ))}
    </div>
  );
}
