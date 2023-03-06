import styled from "styled-components"
import invertoCat from "../images/github-mark.svg"

const Footer = () => {
    return <Container>
        <A href="https://github.com/fmendezr">
            fmendezr <Logo src={invertoCat}></Logo>
        </A>
    </Container>

}

export default Footer;

const Container = styled.footer`
    display: flex;
    justify-content: center;
    background: rgb(30, 0, 10);
    padding: 1rem 0rem; 
    color: white;
    margin-top: -0.125rem;
`

const A = styled.a`
    font-family: "special-elite";
    font-size:1.75rem;
    color: inherit;
    text-decoration: inherit
`

const Logo = styled.img`
    height:1.25rem;
    filter: invert(99%) sepia(1%) saturate(2%) hue-rotate(169deg) brightness(106%) contrast(100%);
`