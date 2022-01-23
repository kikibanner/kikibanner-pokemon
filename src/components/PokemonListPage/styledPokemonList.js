import styled from "@emotion/styled";

const MAX_WIDTH = 480;

export const PokemonListCardContainer = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px 20px 20px 20px;
  padding: 8%;
  display: grid;
  grid-template-areas: 
    'image name name name name'
    'image name name name name';
  box-shadow: 0px 0px 10px #888, 0px 5px 10px #888;
  opacity: 100;
  margin-top: 25px;
  font-size: 21px;
  text-align: center;
`

export const PokemonListContainer = styled.div`
  background-color: white;
  flex: 4;
  position: relative;
  overflow: scroll;
  padding-bottom: 900px;
  padding: 5%;
  padding-left: 250px;
  overflow: scroll;
  @media screen and (max-width: ${MAX_WIDTH}px) {
    padding: 8%;
  }
`

export const PokemonListImageContainer = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: flex;
  padding: 10px;
`

export const PageNav = styled.div`
  justify-content: space-between;
  display: flex;
`

export const NavButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  margin-top: 25px;
` 