import React from "react";
import Pokedex from "./index";
import { QueryClient, QueryClientProvider } from "react-query"
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon";
import { BrowserRouter, Route, Routes } from "react-router-dom";

 export default function AppRoutes() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          < Link to='/'><h1>Pokédex</h1></Link>
          <Routes>
            <Route exact path='/' element={< Pokedex />} />
            <Route exact path='/pokemon/:id' element={< Pokemon />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
 }
