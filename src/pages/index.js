import React, { useState, useEffect } from "react";
import fetchPokemonList from "../services/fetchPokemonList";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pokedex = () => {
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  
  const fetchData = async () => {
    try {
      const data = await fetchPokemonList(offset);
      setPokemonList(prevList => [...prevList, ...data.results]);
      setOffset(prevOffset => prevOffset + 10 );
    } catch (error) {
      console.log('Erro ao puxar dados da API')  
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  },[]); 
  
  
  return (
    <>  
      <></>
      <Section>
        {pokemonList.map((entry, index) => (
          <Link to={`/pokemon/${index + 1}`} key={index}>
            <CardPokemon>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt='pokemon' />
              {entry.name.charAt(0).toUpperCase() + entry.name.slice(1)}
            </CardPokemon>
          </Link>
        ))}
      </Section>
      <Button title="Carregar mais" onClick={fetchData}>Carregar mais</Button>
    </> 
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  margin-top: 20px;
`
const CardPokemon = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 7px;
  width: 140px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  background-color: #fafafa;
  transition-duration: .3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(100, 100, 111, 0.4) 0px 8px 30px 0px;
  }
  `
  const Button = styled.button`
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    margin: 10px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition-duration: .3s; 
    &:hover {
      background-color: #81131e;
      cursor: pointer;
      transition-duration: .3s;  
    }`
export default Pokedex;
