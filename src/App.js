
import './App.css';
import Pokedex from './Pokemon/Pokedex';
import { QueryClient, QueryClientProvider } from "react-query"

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <h1>Quest React Avançado</h1>
     <QueryClientProvider client={queryClient}> 
        < Pokedex ></Pokedex>
      </QueryClientProvider>
    </div>
  );
}

export default App;
