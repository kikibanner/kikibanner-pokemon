import React from 'react';

import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom"

import { 
    PokemonListContainer,
    PokemonListCardContainer,
    PokemonListImageContainer,
    ReleaseButton
}  from "./styledMyPokemons";


const MyPokemons = ({ myPokemons, setMyPokemons }) => {
    console.log('My pokemons', myPokemons)

    const handleDelete = (nickname) => {
        var deleted = myPokemons.filter(p => p.nickname !== nickname)
        localStorage.setItem("myPokemons", JSON.stringify(deleted))
        setMyPokemons(JSON.parse(localStorage.getItem("myPokemons")))
    }

    return (
        <PokemonListContainer style={{paddingBottom: "300px"}}>
            <h2>My Pokémons</h2>
            <h4>Collections: {myPokemons.length}</h4>
            {myPokemons.map(p => (
                <React.Fragment key={p.nickname}>
                    <Link to={`/pokemons/${p.name}`}>
                        <PokemonListCardContainer>
                                <PokemonListImageContainer>
                                    <div>
                                        <img src={p.image == undefined ? '' : p.image} style={{ width: "120px", marginTop: "-30px", marginBottom: "-50px", marginLeft: "-10px", position: "flex" }}  alt="" />
                                    </div>
                                </PokemonListImageContainer>
                                <div style={{gridArea: "name", textTransform: "capitalize"}}>
                                    <b>{p.nickname.replace(/-/g, ' ')}</b> <br />
                                    ({p.name})
                                </div>
                                <div style={{gridArea: "del", textTransform: "capitalize"}}>
                                    <ReleaseButton onClick={() => handleDelete(p.nickname)}>Release</ReleaseButton>
                                </div>
                        </PokemonListCardContainer>
                    </Link>
                </React.Fragment>
            )) }
        </PokemonListContainer>
    )
}

export default MyPokemons