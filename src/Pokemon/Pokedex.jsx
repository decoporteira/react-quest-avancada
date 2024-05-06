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

  console.log(data); // This will log the fetched data

  if (isLoading) return <p>Loading...</p>; // Display a loading message while fetching data
  if (isError) return <p>Error fetching data</p>; // Display an error message if fetching fails
  return (
    <div>
      <ul>

         { data.results.map((entry) => (
          <li><img src={  entry.url }></img>
            { entry.name }</li>
        ))} 
      </ul>
    </div>
  );
}

export default Pokedex;