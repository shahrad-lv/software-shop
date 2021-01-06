import styled from 'styled-components';
import { Typography } from '@material-ui/core'

export const HeaderContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background: linear-gradient(360deg,#050b2b,transparent);
        pointer-events: none;
        z-index: 1;
    }
`;
export const PageNameLine = styled.div`
    margin-bottom: 65px;
    height: 25px;
    position: relative;
    overflow: hidden;
`;

export const Line = styled.div`
    height: 75px;
    margin-bottom: 15px;
    position: relative;
    overflow: hidden;
`; 

export const DistortionContainer = styled.div`
    position: absolute;
    display: block;
    top: 0;
    width:100%;
    height: 100vh;
`;

export const HeaderContent = styled.div`
    width: 670px;
    min-height: 300px;
    margin-left: 15rem;
    z-index: 1000;
    pointer-events: none;
`;

export const PageName = styled(Typography)`
    color: #0ff;
    margin-bottom: 5rem;
    letter-spacing: 3px;
    font-size: 1.2rem;
`;

export const Title = styled(Typography)`
    color: #fff;
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: -20px;
`;

export const DescriptionLine = styled.div`
    height: 60px;
    position: relative;
    overflow: hidden;
    margin-top: 5rem;
`;

export const Description = styled(Typography)`
    color: #fff;
    line-height: 35px;
    color: rgba(255,255,255, 0.7);
    cursor: pointer;
`;

