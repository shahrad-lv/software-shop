import { Button, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 10rem 0;
    background: #fff;
`;

export const ProductItem = styled(Grid)`
    background: #040925;
    padding: 3em;
    color: #fff;
`;

export const PaymentItem = styled(Grid)`
    background: #040925;
    border: 1px solid #fff;
    box-shadow: 0 0 5px #fff;
    padding: 3em;
    color: #fff;
    max-height: 70vh;
`;


export const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background: #040925;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid #fff;
    &:last-of-type{
        border-bottom: none;
    }
`;

export const ProductPic = styled.img`
    width: 210px;
    height: 240px;
    background: linear-gradient(45deg,#404040,#cccccc);
`;


export const ProductContent = styled.div`
    padding: 0 3rem;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-content :center;
    justify-content: center;
    color: #fff;
`;

export const ProductName = styled(Typography)`
    margin-bottom: 1rem;
`;

export const ProductPrice = styled(Typography)`
`;

export const ProductCount = styled(Typography)`
`;

export const ProductDelete = styled(Button)`
    border-radius: 0;
    padding: 6px 22px;
`;

export const ProductActions = styled.div`
    margin-top: 3rem;
`;