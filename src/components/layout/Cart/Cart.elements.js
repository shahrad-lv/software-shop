import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components'
import { device } from "../../../theme/device";

export const GridContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 10rem 0;
    background: #fff;
`;

export const ItemContainer = styled(Grid)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
`;

export const ProductItem = styled(Grid)`
    background: #040925;
    padding: 2em;
    color: #fff;
    margin-bottom: 5rem;
    @media ${device.tablet}{
        padding: 3em;
    }
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
        margin-bottom: 0rem;
        padding-bottom: 0rem;
    }
`;

export const ProductPic = styled.img`
    width: 155px;
    height: 170px;
    background: linear-gradient(45deg,#404040,#cccccc);

    @media ${device.tablet}{
        width: 180px;
        height: 200px;
    }
    @media ${device.laptopL}{
        width: 210px;
        height: 240px;
    }
`;


export const ProductContent = styled.div`
    padding: 0 1.7rem;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-content :center;
    justify-content: space-between;
    color: #fff;
    @media ${device.tablet}{
        padding: 0 3rem;
    }
`;

export const ProductName = styled(Typography)`
    margin-bottom: 1rem;
    font-size: 1rem;
    @media ${device.tablet}{
        font-size: 1.1rem
    }
`;

export const ProductPrice = styled(Typography)`
    font-size: .9rem;
    @media ${device.tablet}{
        font-size: 1rem;
    }
`;

export const ProductCount = styled(Typography)`
    font-size: .9rem;
    @media ${device.tablet}{
        font-size: 1rem;
    }
`;



export const ProductActions = styled.div`
    margin-top: 1.7rem;
    display: block;
    @media ${device.tablet}{
        display: flex;
        margin-top: 2rem;
    }
`;

export const ProductDelete = styled(Button)`
    border-radius: 0;
    padding: 2px 13px;
    margin-left: 2rem;
    @media ${device.laptopL}{
        padding: 6px 22px;
    }
`;

export const ProductIncrease = styled(Button)`
    border-radius: 0;
    padding: 2px 13px;
    margin-bottom: 1rem;
    @media ${device.laptopL}{
        padding: 6px 22px;
    }
    @media ${device.tablet}{
        margin-bottom: 0rem;
    }
`;
export const ProductDecrease = styled(Button)`
    border-radius: 0;
    padding: 2px 13px;
    margin-bottom: 1rem;
    @media ${device.laptopL}{
        padding: 6px 22px;
    }
    @media ${device.tablet}{
        margin-bottom: 0rem;
    }
`;


