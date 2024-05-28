import React, { useState, useEffect } from "react";
import fetchPokemon from '../services/fetchPokemon';
import { useParams } from "react-router-dom";
import fetchAbility from "../services/fetchAbility";

function Pokemon() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [abilitiesData, setAbilities] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon(id);
        setPokemonData(data);
        data.abilities.map(async (ability) => {
          const newAbilitiesData = await fetchAbility(ability.ability.url)
          setAbilities(prevList => [...prevList, newAbilitiesData]);     
  });
       
      } catch (error) {
        console.error('Erro ao puxar dados do Pokémon:', error);
      }
    };
    fetchData();
  }, [id]);

  if (!pokemonData) {
    return <p>Loading...</p>;
  }
    
  const capitalizedPokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)
  return (
    <div className="flex">
       <div className="cartao-pokemon inside">
        <h1>{capitalizedPokemonName}</h1>
        <img className="img-big" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`} alt='pokemon'></img>
          <h2><strong>Pokedex #:</strong> {pokemonData.id}</h2>
          <p><strong>Height:</strong> {pokemonData.height * 10} cm</p>
          <p><strong>Weight:</strong> {pokemonData.weight * 0.1} kg</p>
          <h3><strong>Type:</strong></h3>
          { pokemonData.types.map((type, index) => (
            <p key={index}>{type.type.name}</p>
        ))} 
          
          <h3><strong>Abilities:</strong></h3>
         
          { abilitiesData.map((ability, index) => (
            <p key={index}><strong>{ability.abilityName.charAt(0).toUpperCase() + ability.abilityName.slice(1)}:</strong> {ability.abilityDescription}
           
            </p>
        ))} 

        <h3><strong>Moves:</strong></h3>
        <p>{pokemonData.moves.map((move, index) => move.move.name).join(', ')}</p>
        
          
      </div>
    </div>
  );
}



export default Pokemon;