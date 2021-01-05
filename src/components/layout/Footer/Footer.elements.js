import { Link, Typography } from '@material-ui/core';
import styled from 'styled-components'
import theme from '../../../theme/material-ui.theme'


export const FooterContainer = styled.footer`
    position: fixed;
    z-index: 1;
    bottom: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #040925;
    /* background: linear-gradient(#FBFBFB 60%, ${(props) => theme.palette.primary.main}); */
    color: #000
`;

export const FooterLogo = styled.div`

`;

export const ImgLogo = styled.img`
    width: 250px;
    height: 160px;
`;

export const FooterTitle = styled(Typography)`
    font-size: 2.5em;
    margin: 1.5rem 0 3rem 0;
    letter-spacing: 4px;
    word-spacing: 20px;
    color: ${(props) => theme.palette.secondary.main}
`;

export const FooterLinks = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 25%;
`;

export const FooterLink = styled.li`
    list-style-type: none;
`;

export const StyledLink = styled(Link)`
    text-decoration: none !important;
    color: ${(props) => theme.palette.primary.contrastText}
`;



export const FooterCopyright = styled(Typography)`
    position: absolute;
    bottom: 1rem;
    font-size: 0.9rem;
    text-align: center;
    color: ${(props) => theme.palette.primary.contrastText}
`;