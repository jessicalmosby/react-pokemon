import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, loading }) {
  if (loading) return <p className="loader">Loading</p>;
  return (
    <div className="poke-card">
      {pokemon.map((poke) => (
        <>
          <p key={poke._id}>
            {poke.pokemon} {poke.type_1} {poke.type_2}
          </p>
          <img key={poke} src={poke.url_image} width="200" height="200" alt={poke.pokemon} />
        </>
      ))}
    </div>
  );
}
