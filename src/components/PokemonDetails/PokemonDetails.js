import React from 'react';
import { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Pokeball from './Pokeball';
import {useParams} from "react-router-dom"

import { 
    DetailContainer,
    PokemonDetailImageContainer,
    StatContainer,
    Stat,
    DetailSectionContainer,
    PokemonMoveDiv,
    HeaderContainer,
    TypePill
}  from "./styledPokemonDetails";

/* GET A POKEMON */
const GET_A_POKEMON = gql`
  query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            abilities {
                ability {
                    name
                }
            }
            sprites {
                front_default
                }
            stats {
                base_stat
                }
            abilities {
                ability {
                    name
                }
            }
            moves {
                move {
                    name
                    url
                }
            }
            types {
                type {
                    name
                }
            }
            height
            weight
        }
    }
`;

const PokemonDetails = ({setMyPokemons, myPokemons }) => {
    const [ caughtPokemon, setCaughtPokemon ] = useState('')
    const [ hideGotcha, setHideGotcha ] = useState(true)
    const [ hideBrokeFree, setHideBrokeFree ] = useState(true)
    const [ newNickname, setNewNickname ] = useState('')

    const name = useParams().name
    const selectedPokemon = name

    const {loading, error, data} = useQuery(GET_A_POKEMON, {
        variables:  {
            "name": selectedPokemon
        },
    })

    const [ pokemon, setPokemon ] = useState([])

    useEffect(() => {
        if(data) {
            setPokemon(data)
            console.log(data)
        }
    }, [data])

    const handleCatch = () => {
        let prob = Math.random() < 0.5
        const gotcha = () => {
            setCaughtPokemon(selectedPokemon)
            setHideGotcha(false)
        }
        const brokefree = () => {
            alert(`${ selectedPokemon == undefined ? '' : selectedPokemon.replace(/-/g, ' ')} broke free :(`)
        }
        prob
            ? gotcha()
            : brokefree()
    }

    const addPokemon = (event) => {
        event.preventDefault()
        const newPokemonArray = myPokemons.map(p => p.nickname.toLowerCase())
        const newPokemonObject = {
            name: selectedPokemon,
            nickname: newNickname,
            image: pokemon.pokemon == undefined ? '' : pokemon.pokemon.sprites.front_default
        }
        if (newPokemonObject.nickname == '') {
            alert('This Pokemon must have a nickname!')
        } else {
            if (newPokemonArray.includes(`${newPokemonObject.nickname.toLowerCase()}`)) {
                window.alert(`${newPokemonObject.nickname} is already exist!`)
                setNewNickname('')
            } else {
                setMyPokemons(myPokemons.concat(newPokemonObject))
                localStorage.setItem("myPokemons", JSON.stringify(myPokemons.concat(newPokemonObject)))
                setNewNickname('')
            }
        }
        
    }
    
    return (
        <>
        <DetailContainer >
            {/* Pokemon Detail Image */}
            <PokemonDetailImageContainer>
                <div>
                    <img src={pokemon.pokemon == undefined ? '' : pokemon.pokemon.sprites.front_default} style={{ width: "300px", margin: "-100px", marginBottom: "5px", marginTop: "5px",  position: "flex" }}  alt="" />
                </div>
            </PokemonDetailImageContainer>

            <h2>Stats</h2>
            <div style={{background: "#F9F9F9", padding:"16px", marginBottom: "64px" , borderRadius: '20px 20px 20px 20px'}}>
              <h4>HP: {pokemon.pokemon == undefined ? '0' : pokemon.pokemon.stats[0].base_stat}</h4>
              <StatContainer> <Stat stat={pokemon.pokemon == undefined ? '0' : pokemon.pokemon.stats[0].base_stat} /> </StatContainer>
              <h4>Attack: {pokemon.pokemon == undefined ? '0' : pokemon.pokemon.stats[1].base_stat}</h4>
              <StatContainer> <Stat stat={pokemon.pokemon == undefined ? '0' : pokemon.pokemon.stats[1].base_stat}/> </StatContainer>
              <h4>Defense: {pokemon.pokemon == undefined ? '0' : pokemon.pokemon.stats[2].base_stat}</h4>
              <StatContainer> <Stat stat={pokemon.pokemon == undefined ? '0' : pokemon.pokemon.stats[2].base_stat}/> </StatContainer>
              <h4>Special Attack: {pokemon.pokemon == undefined ? '0' : pokemon.pokemon.stats[3].base_stat}</h4>
              <StatContainer> <Stat stat={pokemon.pokemon == undefined ? '0' : pokemon.pokemon.stats[3].base_stat}/> </StatContainer>
              <h4>Special Defense: {pokemon.pokemon == undefined ? '0' : pokemon.pokemon.stats[4].base_stat}</h4>
              <StatContainer> <Stat stat={pokemon.pokemon == undefined ? '0' : pokemon.pokemon.stats[4].base_stat}/> </StatContainer>
              <h4>Speed: {pokemon.pokemon == undefined ? '0' : pokemon.pokemon.stats[5].base_stat}</h4>
              <StatContainer> <Stat stat={pokemon.pokemon == undefined ? '0' : pokemon.pokemon.stats[5].base_stat}/> </StatContainer>
            </div>

            <DetailSectionContainer>
                <h2>Abilities</h2>
                { pokemon.pokemon == undefined ? '' : pokemon.pokemon.abilities.map(a => a.ability.name.replace(/-/g, ' ')).join(', ') }
            </DetailSectionContainer>

            <DetailSectionContainer style={{paddingBottom: "200px"}}>
                <h2>Moves</h2>
                {
                    pokemon.pokemon == undefined ? ''
                    : pokemon.pokemon.moves.map(m => (
                        <React.Fragment key={m.move.name}>
                            <a href={`https://pokemondb.net/move/${m.move.name}`} target='_blank' style={{textDecoration: "none"}}>
                            <PokemonMoveDiv>
                                {m.move.name}
                            </PokemonMoveDiv>
                            </a>
                        </React.Fragment>
                    ))
                }
            </DetailSectionContainer>

        </DetailContainer>
        <HeaderContainer>
            {/* <button style={{border: "none", backgroundColor: "transparent", fontSize: "24px", color: "white"}}><i class="fa fa-arrow-left"></i></button> */}
            <h1 style={{ textTransform: "capitalize", marginBottom: "0px" }} >{pokemon.pokemon == undefined ? '' : pokemon.pokemon.name.replace(/-/g, ' ')}</h1> 
            <span>
                { 
                pokemon.pokemon == undefined 
                    ? ''
                    : pokemon.pokemon.types.map(t => (
                            <React.Fragment key={t.type.name}>
                                <TypePill><small>{t.type.name}</small></TypePill>
                            </React.Fragment>
                        )) 
                }
            </span>
            <br />
            <small style={{marginLeft: "4px"}}>
                Weight: {pokemon.pokemon == undefined ? '' : pokemon.pokemon.weight} kg
            </small>  
            <br />
            <small style={{marginLeft: "4px"}}>
                Height: {pokemon.pokemon == undefined ? '' : pokemon.pokemon.height} cm
            </small>
            <br />
        </HeaderContainer>

        <Pokeball hidden={hideGotcha} selectedPokemon={selectedPokemon} setHideGotcha={setHideGotcha} handleCatch={handleCatch} addPokemon={addPokemon} newNickname={newNickname} setNewNickname={setNewNickname}/>
        </>
    )

}

export default PokemonDetails