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
      <h1>Pokemon: Gotta catch em all! </h1>
      <div className="filter">
        <Query inputVale={query} changeHandler={setQuery} handleButtonClick={handleButtonClick} />
        <Select types={types} handleTypeChange={handleTypeChange} />
      </div>
      <div className="all">
        <PokeCard pokemon={pokemon} loading={loading} />
      </div>
    </main>
  );
}
