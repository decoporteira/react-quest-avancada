import React, { useState } from "react";
import { useQuery } from "react-query";
import Button from "../Button/Button";

const Pokedex = () => {
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isError } = useQuery(['pokedexData', offset], fetchData);

  const fetchData = async (offset) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Erro ao coletar dados');
    }
    return response.json();
  };

  const fetchMoreData = async () => {
    const newData = await fetchData(offset + 10);
    setOffset(prevOffset => prevOffset + 10);
    // Concatena os novos resultados aos dados existentes
    setData(prevData => ({
      ...prevData,
      results: [...prevData.results, ...newData.results],
    }));
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  return (
    <>
      <div className="flex">
        {data.results.map((entry, index) => (
          <div className="cartao-pokemon" key={index}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt='pokemon' />
            {entry.name}
          </div>
        ))}
      </div>
      <Button title="Carregar mais" onClick={fetchMoreData}></Button>
    </>
  );
}

export default Pokedex;
