import styled from "styled-components";

const Counter = props => {

    let minutes = 0
    let seconds = props.time;

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

    return (
        <Display>
            <p>{minutes}:</p>
            <p>{seconds}</p>
        </Display>
    )
}

export default Counter;

const Display = styled.div`
    display: flex; 
    color: white;
    font-size: 2.5rem;
`