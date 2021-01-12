import { Button, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components'
import theme from '../../../theme/material-ui.theme'
import {device} from '../../../theme/device'
import { Tag, Pay , GridContainer, ProductDecrease, ProductIncrease} from '../Cart/Cart.elements'


export const Container = styled(GridContainer)`
    align-items: flex-start;
    padding: 5rem 4rem;
`;

export const DetailContainer = styled(Grid)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 1fr .6fr 40px;
    grid-template-areas: "Name Name Name"
                                      ". Pic ."
                                      " Costs Costs Costs"
                                      ". Action Action";
                                    
    /* padding: 10rem 0;
    background: #fff; */
    @media ${device.laptop}{
        grid-template-columns: 1fr 1.5fr 1fr;
        grid-template-rows: 50px 1.6fr 3fr 40px;
        grid-template-areas: ". . Pic"
                                         ". Name ."
                                         ". Costs ."
                                         ". Action ."
    }
    @media ${device.laptopL}{
        grid-template-columns: 1fr .7fr 1fr;
    }
`;


export const DetailName = styled(Typography)`
    width: 100%;
    text-align: right;
    grid-area: Name;
    @media ${device.laptop}{
        position: relative;
        margin-bottom: 2.5rem;
        &::before {
            content: '';
            width: 100%;
            height: 1px;
            background: linear-gradient(to left, transparent, #000, transparent);
            position: absolute;
            bottom: -25px;
            left: 0;
        }
    }
`;

export const NameEN = styled(Typography)`
    font-size: 1.3rem;
    @media ${device.laptop}{
        font-size: 1.5rem;
    }
`;

export const NameIR = styled(NameEN)`
    font-size: 1rem;
    opacity: .8;
`;

export const DetailPic = styled.img`
    width: 230px;
    height: 250px;
    margin: 3rem 0;
    grid-area: Pic;
    @media ${device.laptop}{
        width: 310px;
        height: 380px;
        background: linear-gradient(45deg,#7e7e7e,transparent,#979797);
        margin: 3rem;
    }
`;

export const Costs = styled.div`
    grid-area: Costs;
    position: relative;
    margin-top: 2.5rem;
    &::before {
        content: '';
        width: 100%;
        height: 1px;
        background: linear-gradient(to left, transparent, #000, transparent);
        position: absolute;
        bottom: 210px;
        left: 0;
    }
    @media ${device.laptop}{
        margin-top: 0;
        &::before{
            content: none;
        }
    }
`;

export const DetailCount = styled(Pay)`
    margin-top: 2rem;
`;

export const DetailPrice = styled(Pay)`
    width: 100%;
`;

export const DetailDiscount = styled(DetailPrice)``;

export const DetailTag = styled(Tag)``;

export const ActionDetail = styled.div`
    grid-area: Action;
    display: flex;
    @media ${device.laptop}{
        justify-content: flex-end;
    }
`

export const DetailIncrease = styled(ProductIncrease)`
    border-radius: 0;
    padding: 20px 13px;
    margin-bottom: 1rem;
    @media ${device.laptopL}{
        padding: 6px 22px;
    }
    @media ${device.tablet}{
        margin-bottom: 0rem;
    }
`;

export const DetailDecrease = styled(ProductDecrease)`
    border-radius: 0;
    padding: 20px 13px;
    margin-bottom: 1rem;
    @media ${device.laptopL}{
        padding: 6px 22px;
    }
    @media ${device.tablet}{
        margin-bottom: 0rem;
    }
`;

export const DetailAdd = styled(Button)`
    border-radius: 0;
    margin-left: 3rem;
`;
