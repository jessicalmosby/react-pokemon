import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, loading }) {
  if (loading) return <p className="loader">Loading</p>;
  return (
    <div className="poke-card">
      <p>
        {pokemon.pokemon} {pokemon.type_1} {pokemon.type_2}
      </p>
      <img src={pokemon.url_image} width="200" height="200" alt={pokemon.pokemon} />
        
    
    </div>
  );
}
