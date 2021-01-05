import styled from 'styled-components'
import {AppBar, Grid, Tab, Typography} from '@material-ui/core'
import theme from '../../../theme/material-ui.theme'

export const Title = styled(Typography)`
    margin: 5rem 0;
`;

export const GridContainer = styled(Grid)`
    text-align: center;
`;

export const StyledAppBar = styled(AppBar)`
    background: ${(props) => theme.palette.primary.main};
`;

export const StyledTab = styled(Tab)`
    font-size: 1.1rem;
`;

export const TabIcon = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 1.5rem !important;
`;

export const StyledTabPanel = styled.div`
    direction: rtl;
    width: 75%;
    display: flex;
    align-items: center;
    min-height: 250px;
    margin: 0 auto;
`;