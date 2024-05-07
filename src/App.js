
import './App.css';
import Pokedex from './Pokemon/Pokedex';
import Button from './Button/Button';
import { QueryClient, QueryClientProvider } from "react-query"

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <h1>Pokédex</h1>
     <QueryClientProvider client={queryClient}> 
        < Pokedex ></Pokedex>
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </QueryClientProvider>
    </div>
  );
}

export default App;
