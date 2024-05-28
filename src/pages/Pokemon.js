import React, { useState, useEffect } from "react";
import fetchPokemon from '../services/fetchPokemon';
import { useParams } from "react-router-dom";

function Pokemon() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon(id);
        setPokemonData(data)
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
          
          { pokemonData.abilities.map((ability, index) => (
            <p key={index}>{ability.ability.name}</p>
        ))} 
          
      </div>
    </div>
  );
}



export default Pokemon;