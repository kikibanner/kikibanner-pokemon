
import React from 'react';
import { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom"

import { 
    PokemonListContainer,
    PokemonListCardContainer,
    PokemonListImageContainer,
    NavButton,
    PageNav
} from "./styledPokemonList";
import MyPokemons from '../MyPokemonsPage/MyPokemons';

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const PokemonList = ({ setSelectedPokemon, myPokemons }) => {
    const [ page, setPage ] = useState(1);
    const [ loadingg, setLoadingg ] = useState(false)
    const [ noData, setNoData ] = useState(false);
    const [ hidePage, setHidePage ] = useState(false)

    const {loading, error, data} = useQuery(GET_POKEMONS, {
        variables:  {
            limit: 5,
            offset: 5 * (page- 1),
        },
    })

    const [ pokemons, setPokemons ] = useState([])
    
    useEffect(() => {
        if(data) {
            setPokemons(data)
        }
    }, [data])

    const loadPokemonList = () => {
        const newPage = page + 1;
        setPage(newPage)
        setLoadingg(true);
    }

    const loadPrevPokemonList = () => {
        const newPage = page - 1;
        setPage(newPage)
        setLoadingg(true);
    }

    if (loading) {
        return (
            <PokemonListContainer style={{paddingBottom: "300px"}}>
                <h2>Pokémons List</h2>
                Loading...
            </PokemonListContainer>
        )
    }
    if (error) {
        return (
            <PokemonListContainer style={{paddingBottom: "300px"}}>
                <h2>Pokémons List</h2>
                ERROR!
            </PokemonListContainer>
        )
    }

    console.log('Response from server', data);

    return (
        <PokemonListContainer style={{paddingBottom: "300px"}}>
            {/* <h2>Selected pokemon: {selectedPokemon}</h2>
            <h2>Page {page}</h2> */}

            <h2>Pokémons List</h2>
                {
                    pokemons.pokemons == undefined ? ''
                    :
                    pokemons.pokemons.results.map(p => (
                        <React.Fragment key={p.name}>
                            <Link to={`/pokemons/${p.name}`}>
                            <PokemonListCardContainer onClick={() => setSelectedPokemon(p.name)}>
                                <PokemonListImageContainer>
                                    <div>
                                        <img src={p.image == undefined ? '' : p.image} style={{ width: "120px", marginTop: "-30px", marginBottom: "-50px", marginLeft: "-10px", position: "flex" }}  alt="" />
                                    </div>
                                </PokemonListImageContainer>
                                <div style={{gridArea: "name", textTransform: "capitalize"}}>
                                    <b>{p.name.replace(/-/g, ' ')}</b> <br />
                                    Owned: {myPokemons == undefined ? '0' :  myPokemons.filter(po => po.name == p.name).length}
                                </div>
                            </PokemonListCardContainer>
                            </Link>
                        </React.Fragment>
                    ))
                }
                <PageNav style={{ justifyContent: page == 1 ? "end": '' }}>
                    { page !== 1 ? <NavButton onClick={() => loadPrevPokemonList()}>Prev</NavButton> : ''}
                    
                    <NavButton onClick={() => loadPokemonList()}>Next</NavButton>
                </PageNav>
                
        </PokemonListContainer>
    )
};

export default PokemonList