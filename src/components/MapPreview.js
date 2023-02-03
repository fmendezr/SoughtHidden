import { Link } from "react-router-dom";
import styled from "styled-components";

const MapPreview = props => {
    return (
        <Link to="/" style={{color: "black", textDecoration: "none"}}>
            <Container>
                <MapName>{props.name}</MapName>
                <Image src={props.image} alt={props.name}/>
            </Container>
        </Link>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.5rem;
    background: rgb(30, 0, 10);
`;

const MapName = styled.h3`
    color: white;
    font-size: 1.25rem;
    font-family: "special-elite"
`

const Image = styled.img`
    width: 100%;
`

export default MapPreview;
