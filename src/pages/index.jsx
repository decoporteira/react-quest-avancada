import React, { useState, useEffect } from "react";
import Button from "../buttons/Button";
import fetchPokemonList from "../services/fetchPokemonList";
import { Link } from "react-router-dom";

const Pokedex = () => {
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  
  const fetchData = async () => {
    try {
      const data = await fetchPokemonList(offset);
      console.log(data)
      setPokemonList(prevList => [...prevList, ...data.results]);
      setOffset(prevOffset => prevOffset + 10 );
    } catch (error) {
      console.log('Erro ao puxar dados da API')  
    }
  };

  useEffect(() => {
    fetchData();
  },[]); //Aqui ele está carregando duas vezes ao abrir a página
  
  return (
    <>  
      <div className="flex">
        {pokemonList.map((entry, index) => (
          <Link to={`/pokemon/${index + 1}`} key={index}>
            <div className="cartao-pokemon">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt='pokemon' />
              {entry.name.charAt(0).toUpperCase() + entry.name.slice(1)}
            </div>
          </Link>
        ))}
      </div>
      <Button title="Carregar mais" onClick={fetchData} />
    </> 
  );
};

export default Pokedex;
