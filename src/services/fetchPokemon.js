import fetchData from "./fetch"

export default async function fetchPokemon(id) {
  return fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`) 
}