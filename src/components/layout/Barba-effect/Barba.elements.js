import styled from 'styled-components'


export const LoadContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 1310;
    pointer-events: none;
`;

export const LoadScreen = styled.div`
    position: relative;
    background-color: #040925;
    width: 100%;
    height: 0%;
    color: #fff;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
