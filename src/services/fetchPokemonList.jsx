export default async function fetchPokemonList(offset) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Erro ao puxar lista de Pokpemon');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}