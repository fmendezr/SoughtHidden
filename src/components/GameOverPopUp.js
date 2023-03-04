import styled from "styled-components"
import Counter from "./Counter"
import { Link } from "react-router-dom"
import homeIcon from "../images/homeIcon.svg";
import CharacterDropdown from "./CharacterDropdown";
import { useState } from "react";

const GameOverPopUp = (props) => {

    const [userName, setUserName] = useState("")

    if (props.display === false){
        return null
    }

    const updateUserName = (e) => {
        const {value} = e.target;
        setUserName(value);
    }

    const handleSubmition = () => {
        let string = userName;
        string = string.replace(/\s/g, "");
        if (string == ""){
           window.alert("Can't submit blank");
            setUserName("");
        } else {
        props.uploadData(userName, props.userTime);
        }
    }

    return <>
        <Background onClick={(e) => {e.stopPropagation()}}>
            <div className="navbar">
                <Link to="/">
                    <Logo src={homeIcon}/>
                </Link>
                <Counter
                        time={props.userTime}
                />
                <CharacterDropdown 
                    num={0}
                    characters={props.characters}
                    foundCharacters={props.foundCharacters}
                />
            </div>
            <Container>
                <Counter 
                    time={props.userTime}
                />
                <Form>
                    <label>Enter your Name</label>
                    <Input value={userName} onChange={updateUserName}/>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        handleSubmition();
                        }}> Enter </Button>
                </Form>
            </Container>
        </Background>
    </>
}

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(255, 255, 255, 0.50);
    display: flex;
    align-items: center;
    justify-content: center;
` 

const Container = styled.div`
    font-family: "special-elite";
    background-color: rgb(30, 0, 10);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 2rem 1rem;
    border-radius: 10%
`

const Form = styled.form`
    font-size: 1.25rem;
    font-family: "special-elite";
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Input = styled.input`
    font-family: "special-elite";
    font-size: 1rem;
    background: rgb(30, 0, 10, 0.1);
    border: white 2px solid;
    color: white;
`

const Button = styled.button`
    font-family: "special-elite";
    appearance: none;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 15px;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-width: 0;
    outline: none;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    will-change: transform;
    &:disabled {
        pointer-events: none;
    };
    &:hover {
    color: goldenrod;
    border-color: goldenrod;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
    };
    &:active {
    box-shadow: none;
    transform: translateY(0);
    }
`

const Logo = styled.img`
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(66deg) brightness(97%) contrast(110%);
`

const Image = styled.img`
    width: 100%
`


export default GameOverPopUp;