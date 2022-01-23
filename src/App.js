import React from 'react';
import { useState } from 'react';
import { Container, Sidebar, PokemonListIcon, MyPokemonIcon, NavItem } from "./components/styled";
import PokemonList from './components/PokemonListPage/PokemonList';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import MyPokemons from './components/MyPokemonsPage/MyPokemons';

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

/* import samplePokemon from './components/samplepokemon.json' */

const App = () => {
  const [ selectedPokemon, setSelectedPokemon ] = useState([])
  const [ myPokemons, setMyPokemons ] = useState((localStorage.getItem("myPokemons") == undefined ? [] : JSON.parse(localStorage.getItem("myPokemons"))))

  console.log('LOCALLLLLLLLLLLLLLL', myPokemons)

  const padding = {
    marginLeft: "-100px",
    marginRight: "-100px"
  }

  return (
    <Router>
        <Container style={{backgroundColor: "black"}}>
        <Sidebar style={{borderRadius: '20px 20px 0px 0px', position: 'absolute'}}>
          <Link style={padding} to="/pokemons">
            <NavItem text={"Pokémon List"} Icon={PokemonListIcon}/>
          </Link>
          <Link style={padding} to="/my-pokemons">
            <NavItem text={"My Pokémons"} Icon={MyPokemonIcon}/>
          </Link>
        </Sidebar>
    
        {/* POKEMON DETAIL */}
        {/* <PokemonDetail setSelectedPokemon={setSelectedPokemon} selectedPokemon={selectedPokemon} /> */}
        <Switch>
          <Route exact path="/pokemons">
            <PokemonList selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} myPokemons={myPokemons} />
          </Route>
          <Route exact path="/my-pokemons">
            <MyPokemons myPokemons={myPokemons} setMyPokemons={setMyPokemons} setMyPokemons={setMyPokemons} />
          </Route>
          <Route exact path="/">
            <PokemonList selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
          </Route>
          <Route exact path="/pokemons/:name">
            <PokemonDetails selectedPokemon={selectedPokemon} myPokemons={myPokemons} setMyPokemons={setMyPokemons} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );  
}


export default App;
