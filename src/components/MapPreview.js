import { Link } from "react-router-dom";

const MapPreview = props => {
    return (
        <Link to="/" style={{color: "black", textDecoration: "none"}}>
            <div>
                <h3>{props.name}</h3>
                <img src={props.image} alt={props.name}/>
            </div>
        </Link>
    )
}

export default MapPreview;
