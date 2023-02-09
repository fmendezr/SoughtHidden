import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import maps from "../maps";
import homeIcon from "../images/homeIcon.svg";
import CharacterDropdown from "../components/CharacterDropdown";
import Counter from "../components/Counter";
import Crosshair from "../components/Crosshair";

const Map = props => {

    const { id } = useParams();
    const map = maps.find((map) => map.id === id);

    const characterData = map.characters;
    
    const [foundCharacters, setFoundCharacters] = useState({0: false, 1: false, 2:  false});
    const [charactersMissing, setCharactersMissing] = useState(3);
    const [gameOver, setGameOver] = useState(false)
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        return () => clearInterval(interval);
    })


    const reduceCharactersMissing = () => {
        setCharactersMissing((previousState) => {
            return previousState - 1;
        })
    }

    const changeFoundCharacter = id => {
        setFoundCharacters((previousState) => {
           return {...previousState, [id]: true}
        });
    };

    const checkGameOver = () => {
        for (const x in foundCharacters){
            if (foundCharacters[x] === false) return false;
        }
        return true;
    };

    const handleGameOver = () => {
        if (checkGameOver){
            setGameOver(true);
        } 
    };

    return (
        <>
            <div className="navbar">
                <Link to="/">
                    <Logo src={homeIcon}/>
                </Link>
                <Counter
                        time={time}
                />
                <CharacterDropdown 
                    num={charactersMissing}
                    characters={characterData}
                    foundCharacters={foundCharacters}
                />
            </div>
            <main>
                <div className="gameContainer">
                    <Image src={map.image}/>
                </div>
                <Crosshair></Crosshair>
            </main>
        </>
    )
}

const Logo = styled.img`
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(66deg) brightness(97%) contrast(110%);
`

const Image = styled.img`
    width: 100%
`

export default Map;