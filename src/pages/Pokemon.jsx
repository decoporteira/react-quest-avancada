import React, { useState, useEffect } from 'react';
import fetchPokemon from '../services/fetchPokemon';
import { useParams } from "react-router-dom";

function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon(id);
        setPokemonData(data);
       
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
    
      }
    };
    fetchData();
  }, [id]);

  if (!pokemonData) {
    return null; //
  }
  const capitalizedPokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)
  return (
    <div className="flex">
       <div className="cartao-pokemon inside">
        <h1>{capitalizedPokemonName}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`} alt='pokemon'></img>
          <strong>Pokedex #:</strong> {pokemonData.id}
          <strong>Height:</strong> {pokemonData.height * 10} cm
          <strong>Weight:</strong> {pokemonData.weight * 0.1} kg
          <strong>Type:</strong>
          <ul>
          { pokemonData.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
        ))} 
          </ul>
          <strong>Abilities:</strong>
          <ul>
          { pokemonData.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
        ))} 
          </ul>
      </div>
    </div>
  );
}



export default Pokemon;