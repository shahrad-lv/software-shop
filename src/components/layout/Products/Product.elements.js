import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components'
import theme from '../../../theme/material-ui.theme'
import { device } from "../../../theme/device";
import { Link } from 'react-router-dom';
export const ShopContainer = styled.div`
    width: 100%;
    background: ${(props) => theme.palette.primary.main};
    min-height: 100vh;
`;

export const ProductContainer = styled.div`
    width: 350px;
    height: 410px;
    display: inline-block;
    margin-top: 10rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    cursor: pointer;
`;
export const ImgLink = styled(Link)`
    @media ${device.mobileS} {
        width: 53%;
        height: 53%;
    }
    @media ${device.mobileL} {
        width: 60%;
        height: 60%;
    }
    @media ${device.laptop} {
        width: 70%;
        height: 70%;
    }
    @media ${device.laptopL} {
        width: 80%;
        height: 80%;
    }
`;

export const ProductImg = styled.img`
    background: linear-gradient(45deg,#404040,#cccccc);
    width: 100%;
    height: 100%;
`;
export const ProductInfo = styled(Typography)`
        position: absolute;
        bottom: 5rem;
        width: 100%;
        margin: 2rem 0;
        z-index: 10;
        text-align: left;
        color: ${(props) => theme.palette.secondary.light};
        @media ${device.mobileS} {
            left: 60%;
            transform: translateX(-50%);
            width: 70%;
        }
        @media ${device.mobileL} {
            bottom: 3rem;
        }
        @media ${device.laptop} {
            left: 35%;
            bottom: 7rem;
        }
        @media ${device.laptopL} {
            left:14%;
            bottom: 5rem;
        }
`;
export const InfoName = styled(Typography)`
    font-size: 1.3rem;
    color: #fff;
    font-weight: 900;
    text-shadow: 1px 1px 5px #000;
    @media ${device.mobileS} {
        font-size:  .9rem;
    }
    @media ${device.mobileL} {
        font-size:  1rem;
    }
    @media ${device.laptopL} {
        font-size:  1.3rem;
    }
`; 
export const InfoPrice = styled(Typography)`
    color: #fff;
    margin-bottom: .5rem;
    span{
        margin-left: 4px;
    }
`;
export const Actions = styled.div`
    display: flex;
    /* width: 60%; */
    justify-content: space-between;
    align-items: center;
`;

export const AddToCart = styled(Button)`
    border-radius: 0;
    padding: 8px 20px;
    @media ${device.mobileS} {
        padding: 5px 13px;
        font-size: .8rem;
    }
    @media ${device.mobileL} {
        margin-bottom: 0rem;
    }
    @media ${device.laptop} {
        padding: 5px 17px;
        font-size: .9rem;
    }
    @media ${device.laptopL} {
        padding: 5px 18px;
        font-size: .9rem;
    }
`;

export const LaunchButton = styled(Button)`
    width: 0px;
    height: 0px;
    &:hover{
        background: none;
    }
`;