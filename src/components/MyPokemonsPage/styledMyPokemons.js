import styled from "@emotion/styled";

const MAX_WIDTH = 480;


export const NavItem = ({ Icon, text }) => <NavButton><Icon/>{text}</NavButton>;

export const StatContainer = styled.div`
  height: 10px;
  position: relative;
  background: lightgrey;
  border-radius: 25px;
  padding: 10px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  margin-bottom: 10px;
  margin-top: -10px
`
/* NANTI DIBUAT SATU2 PER STAT */

export const Stat = ({ stat }) => {
  const StatDiv = styled.span`
      display: block;
      height: 100%;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      background-color: rgb(43,194,83);
      background-image: linear-gradient(
        center bottom,
        rgb(43,194,83) 37%,
        rgb(84,240,84) 69%
      );
      box-shadow: 
        inset 0 2px 9px  rgba(255,255,255,0.3),
        inset 0 -2px 6px rgba(0,0,0,0.4);
      position: relative;
      overflow: hidden;
      width: ${stat}%;
    `
  return (
    <StatDiv />
  )
}

export const TypePill = styled.div`
  grid: 1;
  border-radius: 16px;
  display: inline-block;
  margin: 4px 2px;
  padding: 5px 10px;
  background: rgba(255,255,255,0.25) 
`

export const DetailSectionContainer = styled.div`
  margin-bottom: 64px
`

export const PokemonDetailImageContainer = styled.div`
  margin-bottom: -100px;
  margin-top: -100px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  background-color: white
`

export const PokeballContainer = styled.div`
    justify-content: center;
    margin: 0 auto; 
    display: flex;
    flex: 1;
`
export const PokeballButton = styled.button`
  border: none;
  background-color: transparent;
  position: fixed;
  bottom: 90px;
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: fixed;

  @media screen and (max-width: ${MAX_WIDTH}px) {
    flex-direction: column-reverse;
  }
`;

export const DetailContainer = styled.div`
  background-color: white;
  flex: 4;
  border-radius: 20px 20px 20px 20px;
  position: relative;
  overflow: scroll;
  padding-bottom: 300px;
  padding: 5%;
  padding-left: 250px;
  @media screen and (max-width: ${MAX_WIDTH}px) {
    padding: 8%;
  }
`

export const HeaderContainer = styled.div`
  flex: 1; 
  color: white;
  padding: 5%;
  margin-top: -32px;
  @media screen and (max-width: ${MAX_WIDTH}px) {
    padding: 8%;
  }
`

export const Sidebar = styled.div`
  a {
        text-decoration: none;
    }

    background-color: lightgrey;
    display: flex;
    width: 200px;
    height: 100vh;
    z-index: 100;
    position: fixed;
    flex-direction: column;

    @media screen and (max-width: ${MAX_WIDTH}px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        padding: 0 24px;
        padding-bottom: 50px;
        box-sizing: border-box;
        height: 80px;
        box-shadow: 10px 5px 20px #888, 0px 10px 50px #888;
        background-color: white;
        z-index: 999;
        position: fixed;
    }
`;

export const NavButton = styled.button`
   border: none;
    background-color: transparent;

    height: 52px;
    font-size: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 25vh; 
    padding-bottom: 25vh; 
    font-size: 14px;

    > :first-child {
        margin: 0 16px;
    }

    :hover {
        background-color: brown;
        cursor: pointer;
        color: white;
    }

    @media screen and (max-width: ${MAX_WIDTH}px) {
        flex-direction: column;
        width: 100vw;
        font-size: 10px;
        padding-top: 8px;

        > :first-child {
            margin-bottom: 2px;
        }

        :hover {
          background-color: black;
          cursor: pointer;
          color: white;
      }
    }
`;

export const PokemonMoveDiv = styled.div`
  background: #F9F9F9;
  padding: 16px ;
  margin-bottom:  16px  ;
  border-radius: 20px 20px 20px 20px;
  box-shadow:  0px 0px 5px #888, 0px 5px 5px #888
`

export const PokemonListCardContainer = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px 20px 20px 20px;
  padding: 8%;
  display: grid;
  grid-template-areas: 
    'image name'
    'image name'
    'image del';
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

export const PokemonInput = styled.input`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
` 

export const PokeballComponentContainer = styled.div`
  justify-content: center;
  margin: 0 auto; 
  border: none;
  background-color: transparent;
  position: relative;
  bottom: 90px;
  text-align: center;
`

export const ModalCatchContainer = styled.div`
  border: none;
  background-color: transparent;
  position: fixed;
  bottom: 90px;
  text-align: center;
  padding-bottom: 250px;
`

export const SaveOrCancel = styled.div`
  justify-content: space-between;
  display: flex;
`

export const ReleaseButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  margin-top: 25px;
` 
