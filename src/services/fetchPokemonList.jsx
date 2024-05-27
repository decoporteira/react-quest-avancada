export default async function fetchPokemonList(offset) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Erro ao puxar lista de Pokémon');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Erro ao puxar lista de Pokémon', error);
    throw error;
  }
}