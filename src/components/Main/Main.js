import React from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import PokeCard from '../PokeCard/PokeCard.js';
import Select from '../Controls/Select';

export default function Main() {
  const { pokemon, loading, types, handleTypeChange } = usePokemon();

  return (
    <main>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <PokeCard pokemon={pokemon} loading={loading} />
    </main>
  );
}
