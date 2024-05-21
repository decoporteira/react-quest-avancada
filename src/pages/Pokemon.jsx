import React, { useState, useEffect } from 'react';
import fetchPokemon from '../fetchPokemon';
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
    return null; // or any fallback UI
  }
  console.log(pokemonData.id)
  const capitalizedPokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)
  return (
    <div className="flex">
       <div className="cartao-pokemon inside">
        <h1>{capitalizedPokemonName}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`} alt='pokemon'></img>
        <ul>
          <li><strong>Pokedex #:</strong> {pokemonData.id}</li>
          <li><strong>Height:</strong> {pokemonData.height * 10} cm</li>
          <li><strong>Weight:</strong> {pokemonData.weight * 0.1} kg</li>
        </ul>
      </div>
    </div>
  );
}



export default Pokemon;