import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, loading }) {
  if (loading) return <p className="loader">Loading</p>;
  console.log(pokemon);
  return (
    <div className="poke-card">
      <p>{pokemon.pokemon}</p>
      <p>ability: {pokemon.ability_1}</p>
      <p>HP: {pokemon.hp}</p>
      <img src={pokemon.url_image} width="200" height="200" alt={pokemon.pokemon} />
    </div>
  );
}
