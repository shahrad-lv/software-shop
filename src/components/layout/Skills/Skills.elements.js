import styled, { ThemeProvider } from 'styled-components'
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import theme from '../../../theme/material-ui.theme'
export const SkillsContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`;

export const GridContainer = styled(Grid)`
    width: 85%;
    display: flex;
    flex-wrap: wrap;
`;

export const GridItem = styled(Grid)`
    /* transform: translateY(400px); */
    position: relative;
    top: 200px;
    padding: 30px 0;
`;


export const Title = styled(Typography)`
    margin: 5rem 0;
    position: relative;
    top: 200px;
    color: ${(props) => theme.palette.secondary.main};
    /* color : ${(props) => theme.palette.primary.main}; */
`;

export const SkillContainer = styled(Card)`
    max-width: 345px;
    margin: 0 auto;
    text-align: center;
    background: transparent;
`;

export const SkillMedia = styled(CardMedia)`
    width: 95px;
    height: 95px;
    margin: 0 auto;
`;

export const SkillContent = styled(CardContent)`
    background: transparent;
`;

export const SkillTitle = styled(Typography)`
    margin-bottom: 1rem;
`;