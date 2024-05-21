import React from "react";
// import Pokedex from "../Pokemon/Pokedex";
import Pokemon from "./pokemon";
import { 
  BrowserRouter,
  Route,
  Routes
 } from "react-router-dom";

 export default function AppRoutes() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Pokemon/>} />
    </Routes>
  </BrowserRouter>
   )
 }
