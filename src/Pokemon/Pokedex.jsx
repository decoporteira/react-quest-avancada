import { useQuery } from "react-query";

const Pokedex = () => {
  const fetchData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }

  const { data, isLoading, isError } = useQuery('pokedexData', fetchData);

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;
  return (
    <div className="flex">
      { data.results.map((entry, index) => (
        <div className="cartao-pokemon"  key={index}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt='pokemon'></img>
        { entry.name }
        </div>
      ))} 
     </div>
  );
}

export default Pokedex;