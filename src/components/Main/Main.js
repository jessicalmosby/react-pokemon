import React from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import PokeCard from '../PokeCard/PokeCard.js';
import Select from '../Controls/Select';
import Query from '../Controls/Query';
import './Main.css';

export default function Main() {
  const { pokemon, loading, types, handleTypeChange, query, setQuery, handleButtonClick } =
    usePokemon();

  return (
    <main>
      <h1>Pokemon- Gotta catch em all!</h1>
      <div className="filter">
        <Select types={types} handleTypeChange={handleTypeChange} />
        <Query inputVale={query} changeHandler={setQuery} handleButtonClick={handleButtonClick} />
      </div>
      <div className="all">
        {pokemon.map((poke) => (
          <PokeCard key={poke._id} pokemon={poke} loading={loading} />
        ))}
      </div>
    </main>
  );
}
