import styled from "styled-components"

const Crosshair = props => {

    return (
        <Circle 
            xCoord={props.xCoord}
            yCoord={props.yCoord}
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
    transform:translate(-50%,-50%);
    top: ${props => props.yCoord}px;
    left: ${props => props.xCoord}px;
`