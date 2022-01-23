import { useState, useEffect } from 'react';
import './Pokeball.css';
import styled from "@emotion/styled";
import { 
    PokeballContainer, 
    PokeballButton,
    PokeballComponentContainer,
    ModalCatchContainer,
    SaveButton,
    SaveOrCancel
} 
from "./styledPokemonDetails";

import pokeballImage from '../../assets/pokeballbutton.svg'

const PokeballButtonImage = styled.img`
    width: 100px;
`



const Pokeball = ({ hidden, setHideGotcha, handleCatch, selectedPokemon, addPokemon, newNickname, setNewNickname }) => {
    const [ hide, setHide ] = useState({ display: "" })

    return (
        <PokeballComponentContainer >
            <PokeballContainer>
                <ModalCatchContainer hidden={hidden}>
                    <div style={{backgroundColor: "white", padding: "10px", paddingBottom: "30px", borderRadius: "10px 10px 10px 10px", boxShadow: "10px 5px 10px #888, 10px 10px 70px #888" }}>
                        <h3>Gotcha!</h3>
                        <hr />
                        <br />
                        <SaveOrCancel>
                            <form onSubmit={addPokemon}>
                                <input value={newNickname} placeholder="give a nickname" type="text" onChange={event => setNewNickname(event.target.value)} />
                                <br />
                                <SaveButton onClick={() => setHideGotcha(true)} type='submit' style={{width: "200px"}}>Save</SaveButton>
                            </form>
                        </SaveOrCancel>
                            <SaveButton onClick={() => setHideGotcha(true)} style={{ backgroundColor: "red", width: "200px", marginTop: "10px" }}>Cancel</SaveButton>
                    </div>
                </ModalCatchContainer>
            </PokeballContainer>
            <PokeballContainer>
                <PokeballButton onClick={() => handleCatch()}>
                    <div className="bounce" onAnimationEnd={() => setHide({display: "none"})} style={hide}><b>Tap to catch this Pokémon!</b> </div>
                    <br />
                    <PokeballButtonImage className="bounce" src={pokeballImage} alt="" />
                </PokeballButton>
            </PokeballContainer>
        </PokeballComponentContainer>
    )
}

export default Pokeball