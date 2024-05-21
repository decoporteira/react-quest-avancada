
import './App.css';
// import Pokedex from './Pokemon/Pokedex';
// import Button from './Button/Button';
import AppRoutes from './pages/routes';
// import { QueryClient, QueryClientProvider } from "react-query"

function App() {
  // const queryClient = new QueryClient();
  return (
    <>
      <AppRoutes />
      {/* <div className="App">
        <h1>Pokédex</h1>
      <QueryClientProvider client={queryClient}> 
          < Pokedex ></Pokedex>
        </QueryClientProvider>
      
      </div> */}
    </>
  );
}

export default App;
