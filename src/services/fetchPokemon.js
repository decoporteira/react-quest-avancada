export default async function fetchPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error('Erro ao puxar dados do Pokémon');
    }
    const data = await response.json();
    return data;
  } catch (error) {
      console.error('Erro ao puxar dados do Pokémon', error);
    throw error;
  }
}