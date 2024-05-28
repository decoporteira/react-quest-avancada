export default async function fetchData(url) {
  try {
    const response = await fetch(url);
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