export async function fetchInitialPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  const data = await resp.json();
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}

export async function fetchPokemon(type) {
  const resp = await fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex/types${type}`);
  const data = await resp.json();
  return data.results;
}