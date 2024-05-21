import React from "react";
import Pokedex from "../Pokemon/Pokedex";
import { QueryClient, QueryClientProvider } from "react-query"
import { 
  BrowserRouter,
  Route,
  Routes
 } from "react-router-dom";

 export default function AppRoutes() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <h1>Pokédex</h1>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Pokedex />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </div>
);
 }
