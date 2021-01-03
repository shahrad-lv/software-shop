import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Logo = styled.div`
    padding: .5rem;
`;

export const ImgLogo = styled.img`
    width: 75px;
    height: 75px;
`;

export const NavContainer = styled.nav`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background: rgba(5, 11, 43);
`;

export const NavLink = styled(Link)`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 2rem;
        margin: 1rem;
        color: white;
        cursor: pointer;
        font-family:  sans-serif;
        text-transform: uppercase;
        font-weight: lighter;
        color: white;
        text-decoration: none;
`;