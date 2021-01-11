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



export const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background: #040925;
    margin-bottom: 6rem;
    position: relative;
    &::before {
        content: '';
        width: 100%;
        height: 1px;
        background: linear-gradient(to left, transparent, #fff, transparent);
        position: absolute;
        bottom: -50px;
        left: 0;
    }
    &:last-of-type{
        margin-bottom: 0;
        &::before{
            content: none;
        }
    }
`;

export const ProductPic = styled.img`
    width: 155px;
    height: 170px;
    background: linear-gradient(45deg,#666666,#cccccc);

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
    font-size: 1rem;
    @media ${device.tablet}{
        font-size: 1.1rem
    }
`;
export const ProductNameIR = styled(Typography)`
    margin-bottom: 2rem;
    font-size: .9rem;
    opacity: 0.7;
    @media ${device.tablet}{
        font-size: .95rem
    }
`;

export const ProductPrice = styled(Typography)`
    font-size: .9rem;
    display: flex;
    flex-direction: row-reverse;
    span {
        margin-left: 4px;
    }
    @media ${device.tablet}{
        font-size: 1rem;
    }
`;

export const ProductDiscount = styled(Typography)`
    font-size: .9rem;
    display: flex;
    flex-direction: row-reverse;
    span {
        margin-left: 4px;
    }
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
        justify-content: space-around;
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


// Payment

export const PaymentItem = styled(Grid)`
    background: #040925;
    box-shadow: 0 0 5px #fff;
    padding: 2.5em;
    color: #fff;
    height: 45vh;
    position: relative;
`;




export const Tag = styled(Grid)`
    font-size: 1rem;
    margin-left: 0.5rem;
    span{
        font-size: .77rem;
    }
    @media ${device.tablet}{
        font-size: 1.1rem;
    }
    @media ${device.laptopL}{
        font-size: 1rem;
    }
`;


export const Pay = styled(Grid)`
    display: flex;
    font-size: 1rem;
    flex-direction: row-reverse;
    justify-content: space-between;
    span {
        margin-left: 4px;
    }
    @media ${device.tablet}{
        font-size: 1.1rem;
    }
    @media ${device.laptopL}{
        font-size: 1rem;
    }
`;

export const Price = styled(Pay)`
    margin-bottom: 1rem;
`;

export const Discount = styled(Pay)`
    margin-bottom: 3rem;
    position: relative;
    &::before {
        content: '';
        width: 100%;
        height: 1px;
        background: linear-gradient(to left, transparent, #fff, transparent);
        position: absolute;
        bottom: -25px;
        left: 0;
    }
`;

export const Finalize = styled(Button)`
    border-radius: 0;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
`;