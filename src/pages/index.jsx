import React, { useState } from "react";
import { useQuery } from "react-query";
import Button from "../Button/Button";
import { Link } from "react-router-dom";


const Pokedex = () => {
  const [limit, setLimit] = useState(10);

  const fetchData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
    if (!response.ok) {
      throw new Error('Erro ao coletar dados');
    }
    return response.json();
  }

  const { data, isLoading, isError } = useQuery(['pokedexData', limit], fetchData);

  const fetchMoreData = () => {
    setLimit(limit + 10);
  }
 
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;
  return (
    <>  
      <div className="flex">
        { data.results.map((entry, index) => (
          < Link to={`/pokemon/${index + 1}`} key={index}>
          <div className="cartao-pokemon"  key={index}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt='pokemon'></img>
          { entry.name.charAt(0).toUpperCase() + entry.name.slice(1) }
          </div>
          </Link>
        ))} 
      </div>
      < Button title="Carregar mais" onClick={fetchMoreData} ></Button>
    </> 
  );
}

export default Pokedex;