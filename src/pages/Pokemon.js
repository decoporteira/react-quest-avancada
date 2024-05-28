import React, { useState, useEffect } from "react";
import fetchPokemon from '../services/fetchPokemon';
import { useParams } from "react-router-dom";
import fetchAbility from "../services/fetchAbility";
import styled from "styled-components";

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
    <Section>
       <CardInside>
        <h1>{capitalizedPokemonName}</h1>
        <IMG className="img-big" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`} alt='pokemon'></IMG>
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
        
          
      </CardInside>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;

  p {
    margin-block-start: .4em;
    margin-block-end: .4em;
  }
  
  h3 {
    margin-block-end: .4em;
  }
`
const CardInside = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 35px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  background-color: #fafafa;
  transition-duration: .3s;
  width: 960px;
  padding-left: 30px;
  padding-right: 30px;
  height: auto;
  
`
const IMG = styled.img`
  width: 150px;
`

export default Pokemon;