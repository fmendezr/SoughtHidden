import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase-config";
import {
    getDoc, 
    doc,

} from "firebase/firestore"
import styled from "styled-components";

const Leaderboard = (props) => {
    
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const fetchedLeaderboard = await filterLeaderboard();
            setLeaderboard(fetchedLeaderboard);
        }
        fetchLeaderboard();
    }, [])

    async function get_leaderboard_from_firebase () {
        const dataRef = doc(db, "maps", props.id);
        const docSnap = await getDoc(dataRef);

        if (docSnap.exists()){
          let x = await("Document data:", docSnap.data().leaderboard)
            return x;
        } else {
            return("no such document!")
        }
  }
    
    async function filterLeaderboard () {
        let data = await get_leaderboard_from_firebase();
        let sortedLeaderboard = data.sort(
            (a, b) => (a.time < b.time) ? -1 : (a.time > b.time) ? 1: 0);
        return (sortedLeaderboard.length > 10 ? sortedLeaderboard.slice(0,10) : sortedLeaderboard);
    }

    const formatTime = (time) => {
        let minutes = 0
        let seconds = time;

        while (seconds >= 60){
            seconds -= 60;
            minutes += 1;
        }

        if (seconds < 10){
            seconds = `0${seconds}`;
        }

        if (minutes < 10){
            minutes = `0${minutes}`;
        }   

        return `${minutes}:${seconds}`
    }

    return <Container>
        <Title>Leaderboard</Title>
        {leaderboard.map((entry, index) => {
            return (
                <Entry key={index}>
                    <Position>{index + 1}.</Position>
                    <Name>{entry.name}</Name>
                    <Time>{formatTime(entry.time)}</Time>
                </Entry>
            )
        })}
    </Container>

}

export default Leaderboard;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:0.75rem;
    color: white
`

const Title = styled.h1`
    font-size: 1.5rem;
    color: goldenrod
`

const Entry = styled.div`
    display: flex;
    gap: 0.25rem;
    justify-content: space-between;
    align-items: center;
`
const Position = styled.p`
`

const Name = styled.p`
    max-width: 125px
`

const Time = styled.p`
`