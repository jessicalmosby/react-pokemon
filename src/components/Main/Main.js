import React from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import PokeCard from '../PokeCard/PokeCard.js';

export default function Main() {
  const pokemon = usePokemon();
  return (
    <main>
      <PokeCard pokemon={pokemon} />
    </main>
  );
}
