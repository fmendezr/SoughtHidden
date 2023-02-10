import styled from "styled-components"

const Crosshair = props => {

    return (
        <Circle 
            xCoord={props.xCoord}
            yCord={props.yCoord}
        />
    )
}

export default Crosshair

const Circle = styled.div`
    height: 5vw;
    width: 5vw;
    min-width: 1.5rem;
    min-height: 1.5rem;
    border: 3px dashed white;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    position: absolute;
    transform-origin: center;
    top: ${props => props.xCoord}%;
    left: ${props => props.yCord}%;
`