export default async function fetchAbility(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Erro ao puxar dados da habilidade');
    }
    const data = await response.json();

    const pokemonAbility = { abilityName: data.name, abilityDescription: data.effect_entries[1].effect }
    return pokemonAbility;
  } catch (error) {
      console.error('Erro ao puxar dados da habilidade', error);
    throw error;
  }
}