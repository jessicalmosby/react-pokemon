import { useEffect, useState } from 'react';
import { fetchInitialPokemon } from '../services/fetchPokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetchInitialPokemon();

      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { pokemon, loading };
}
