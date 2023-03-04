import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import maps from "../maps";
import homeIcon from "../images/homeIcon.svg";
import CharacterDropdown from "../components/CharacterDropdown";
import Counter from "../components/Counter";
import Crosshair from "../components/Crosshair";
import ChooseCharacter from "../components/ChooseCharacter";
import GameOverPopUp from "../components/GameOverPopUp";
import { db } from "../firebase-config";

import {
    getDoc, 
    updateDoc,
    doc,
    arrayUnion, 
} from "firebase/firestore"

const Map = props => {

    const { id } = useParams();
    const map = maps.find((map) => map.id === id);

    const characterData = map.characters;
    
    const [foundCharacters, setFoundCharacters] = useState({0: false, 1: false, 2: false});
    const [charactersMissing, setCharactersMissing] = useState(3);
    const [gameOver, setGameOver] = useState(false);
    const [time, setTime] = useState(0);
    const [finalTime, setFinalTime] = useState(0);
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

    async function get_coordinates_from_firebase (mapId, chid) {
        const dataRef = doc(db, "maps", mapId);
        const docSnap = await getDoc(dataRef)
         
        if (docSnap.exists()) {
            let x = await ("Document data:", docSnap.data().characters[chid]);
            return x
          } else {
            return ("No such document!");
          }
    }

    async function upload_time_into_firebase (name, time){
        const mapData = {name: name, time: time};
        const dataRef = doc(db, "maps", id);

        await updateDoc(dataRef, {
            leaderboard: arrayUnion(mapData)
        });
    }

    async function get_leaderboard_from_firebase () {
          const dataRef = doc(db, "maps", id);
          const docSnap = await getDoc(dataRef);

          if (docSnap.exists()){
            let x = await("Document data:", docSnap.data().leaderboard)
            return x;
          } else {
            return("no such document!")
          }
    }

    async function verifyThatClickedCorrectLocation(chid) {
        let data =  await(get_coordinates_from_firebase(id, chid))
        if ( (Math.abs(data[0] - xCoord)) <= 5 && (Math.abs(data[1] - yCoord)) <= 5){
           changeFoundCharacter(chid);
           ChangeCharactersMissing();
           handleGameOver();
        }
    }

    async function filterLeaderboard () {
        let data = await get_leaderboard_from_firebase();
        let sortedLeaderboard = data.sort(
            (a, b) => (a.time < b.time) ? -1 : (a.time > b.time) ? 1: 0);
        return sortedLeaderboard.length > 10 ? sortedLeaderboard.slice(0,10) : sortedLeaderboard;
    }

    const getLeaderboardData = () => {
        let leaderboard =  filterLeaderboard()
        return leaderboard
    }

    const handleCharacterClick = (chid) => {
        verifyThatClickedCorrectLocation(chid);
    }

    const imageClick = (e) => {
        updateCrosshair(e);
        updateCoords(e);
        console.log(getLeaderboardData())
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
        setXCoord(Math.floor((e.clientX - rect.left) * 100 / container.offsetWidth));
        setYCoord(Math.floor((e.clientY - rect.top) * 100 / container.offsetWidth));
      
    }

    const ChangeCharactersMissing = () => {
        setCharactersMissing((previousState) => {
           return previousState -= 1
        })
    }

    const changeFoundCharacter = (id) => {
        setFoundCharacters((previousState) => {
           return {...previousState, [id]: true}
        });
    };

    const handleGameOver = () => {
        if (charactersMissing === 1){
            setGameOver(true)
            setFinalTime(time)
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
                        foundCharacters={foundCharacters}
                        xCoord={displayX}
                        yCoord={displayY}
                        display={displayTargeting}
                        handleClick={handleCharacterClick}
                        disappear={changeTargeting}
                    />
                    <GameOverPopUp
                        display={gameOver}
                        userTime={finalTime}
                        characters={characterData}
                        foundCharacters={foundCharacters}
                        uploadData={upload_time_into_firebase}
                        getLeaderboard={getLeaderboardData}
                        id={id}
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