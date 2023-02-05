import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import maps from "../maps";
import homeIcon from "../images/homeIcon.svg";

const Map = props => {

    const { id } = useParams();
    const map = maps.find((map) => map.id === id);

    return (
        <>
            <div className="navbar">
            <Link to="/">
                <Logo src={homeIcon}/>
            </Link>
                {map.characters.map((character) => {
                    return (
                        <div>
                            <Character src={character.image} />
                            <p>{character.name}</p>
                        </div>
                    )
                })}
            </div>
            <main>
                <div className="gameContainer">
                    <Image src={map.image}/>
                </div>
            </main>
        </>
    )
}

const Logo = styled.img`
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(66deg) brightness(97%) contrast(110%);
`

const Character = styled.img`
    width: 3rem;
`

const Image = styled.img`
    width: 100%
`


export default Map;