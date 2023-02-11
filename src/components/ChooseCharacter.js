import styled from "styled-components"

const ChooseCharacter = props => {
 
    let x = props.xCoord;
    let y = props.yCoord; 

    let width = window.innerWidth;

    if (x < width/3){
        x  += 60;
    } else if (x/2 > width/3){
        x -= 60;
    }

    if (y >= width){
        y -= 70;
    } else {
        y += 70;
    }

    return (
        <Container x={x} y={y}>
            {props.characters.map((character) => {
                return (
                    <Name key={character.id} id={character.id}>
                        <p>{character.name}</p>
                    </Name>
                )
            })}
        </Container>
    )
}

export default ChooseCharacter;

const Container = styled.div`
    display: flex;   
    flex-direction: column;
    background: white;
    transform:translate(-50%,-50%);
    position: absolute;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 20%;
    border: 2px solid rgba(255, 255, 255, 0.1); 
    font-family: "special-elite";
    color: rgb(62, 0, 21)
`

const Name = styled.div`
    &:hover {
        color: goldenrod;
    }
`