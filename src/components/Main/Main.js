import React from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import PokeCard from '../PokeCard/PokeCard.js';
import Select from '../Controls/Select';
import Query from '../Controls/Query';

export default function Main() {
  const { pokemon, loading, types, handleTypeChange, query, setQuery, handleButtonClick } = usePokemon();
  

  return (
    <main>
      <Query inputVale={query} changeHandler={setQuery} handleButtonClick={handleButtonClick} />
      <Select types={types} handleTypeChange={handleTypeChange} />
      <PokeCard pokemon={pokemon} loading={loading} />
    </main>
  );
}
