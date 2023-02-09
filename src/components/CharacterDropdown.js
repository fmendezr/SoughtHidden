import { useState } from "react";
import styled from "styled-components";

const CharacterDropdown = props => {

    const [dropdown, setDropdown] = useState(false)

    const changeDropdown = () => {
        setDropdown((previousState) => {
            return !previousState;
        })
    }

    if (dropdown) return (
        <>
        <Circle onClick={changeDropdown}>
            <p>{props.num}</p>
        </Circle>
        <Dropdown onClick={changeDropdown}>
            {props.characters.map((character) => {

                if (props.foundCharacters[character.id] === true){
                    return (
                        <Div key={character.id}>
                            <Character src={character.image} />
                            <FoundCharacterName>{character.name}</FoundCharacterName>
                        </Div>
                    )
                }

                return (
                    <Div key={character.id}>
                        <Character src={character.image} />
                        <CharacterName>{character.name}</CharacterName>
                    </Div>
                )
            })}
        </Dropdown>
        </>
    );

    return (
        <Circle onClick={changeDropdown}>
            <p>{props.num}</p>
        </Circle>
    )
}

export default CharacterDropdown;

const Circle = styled.div`
    background: white;
    color: rgb(30, 0, 10);
    padding: 1rem 1.5rem;
    border-radius: 50%;
    font-size: 1.75rem
`

const Dropdown = styled.div`
    position: fixed;
    top: 13%;
    right: 19%;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1rem;
    border-radius: 15%;
`

const Div = styled.div`
    display: flex;
    align-items: center;
`

const Character = styled.img`
    width: 3rem;
`
const CharacterName = styled.p`
    color: rgb(30, 0, 10);
`

const FoundCharacterName = styled.p`
    color: rgb(30, 0, 10);
    text-decoration: line-through;
`