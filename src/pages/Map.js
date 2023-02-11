import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import maps from "../maps";
import homeIcon from "../images/homeIcon.svg";
import CharacterDropdown from "../components/CharacterDropdown";
import Counter from "../components/Counter";
import Crosshair from "../components/Crosshair";
import ChooseCharacter from "../components/ChooseCharacter";

const Map = props => {

    const { id } = useParams();
    const map = maps.find((map) => map.id === id);

    const characterData = map.characters;
    
    const [foundCharacters, setFoundCharacters] = useState({0: false, 1: false, 2: false});
    const [charactersMissing, setCharactersMissing] = useState(3);
    const [gameOver, setGameOver] = useState(false)
    const [time, setTime] = useState(0);
    const [xCoord, setXCoord] = useState(0);
    const [yCoord, setYCoord] = useState(0);

    const [displayTargeting, setDisplayTasrgeting] = useState(false)
    const [displayX , setDisplayX] = useState(0);
    const [displayY, setDisplayY] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        return () => clearInterval(interval);
    })

    const imageClick = (e) => {
        updateCrosshair(e);
        updateCoords(e);
    }

    const changeTargeting = () => {
        setDisplayTasrgeting((previousState) => {
            return !previousState;
        })
    }

    const updateCrosshair = (e) => {
        setDisplayX(e.pageX);
        setDisplayY(e.pageY);
        changeTargeting();
    }

    const updateCoords = (e) => {
        const container = e.target;
        let rect  = container.getBoundingClientRect();
        setXCoord(Math.floor((e.clientX - rect.top) * 100 / container.offsetWidth));
        setYCoord(Math.floor((e.clientY - rect.top) * 100 / container.offsetWidth));
      
    }

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
                <div className="gameContainer" onClick={imageClick}>
                    <Image src={map.image}/>
                    <Crosshair
                        xCoord={displayX}
                        yCoord={displayY}
                        display={displayTargeting}
                    />
                    <ChooseCharacter 
                        characters={characterData}
                        xCoord={displayX}
                        yCoord={displayY}
                        display={displayTargeting}
                    />
                </div>
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