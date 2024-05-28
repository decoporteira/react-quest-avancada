import fetchData from "./fetch";

export default async function fetchPokemonList(offset) {
  return fetchData(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`) 
}