import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchTypes } from '../services/fetchPokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetchInitialPokemon();

      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    setLoading(true);
    setSelectedType(type);
    const data = await fetchPokemon(type, query);
    setPokemon(data);
    setLoading(false);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    const data = await fetchPokemon(selectedType, query);
    setPokemon(data);
    setLoading(false);
  };
  return { pokemon, loading, handleTypeChange, types, query, setQuery, handleButtonClick };
}
