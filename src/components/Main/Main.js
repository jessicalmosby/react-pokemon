import React from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import PokeCard from '../PokeCard/PokeCard.js';

export default function Main() {
  const { pokemon, loading } = usePokemon();
  return (
    <main>
      <PokeCard pokemon={pokemon} loading={loading} />
    </main>
  );
}
