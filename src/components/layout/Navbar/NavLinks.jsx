import React from 'react'
import { NavContainer, NavLink } from './Navbar.elements'
import { useDispatch, useSelector } from "react-redux";
import { navtoggle } from "../../../redux/Reducers/navbarReducer";
import StorefrontIcon from '@material-ui/icons/Storefront';
import HomeIcon from '@material-ui/icons/Home';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';

const NavLinks = () => {
    const dispatch = useDispatch();
    const handleClose = () =>  {
        dispatch(navtoggle());
    };

    const products = useSelector(state => state.firestore.ordered.product);
    let TotalCount = 0;
    for (let x in products) {
        TotalCount += products[x].Count;
    }
    return (
        <NavContainer >
            <NavLink onClick={handleClose} to='/'>
                <HomeIcon /> خانه
            </NavLink>
            <NavLink onClick={handleClose} to='/shop'>
                <StorefrontIcon /> فروشگاه نرم افزار
            </NavLink>
            <NavLink>
                <EmojiObjectsIcon /> آموزش ها
            </NavLink>
            <NavLink onClick={handleClose} to='/about'>
                <GroupIcon /> درباره ما
            </NavLink>
            <NavLink>
                <PersonIcon /> حساب کاربری 
            </NavLink>
            <NavLink onClick={handleClose} to='/cart'>
                <Badge color="secondary" badgeContent={TotalCount} anchorOrigin={{vertical: 'top', horizontal: 'left', }}>
                    <ShoppingCartIcon/>    
                </Badge>
                سبد خرید 
            </NavLink>
        </NavContainer>
    )
}

export default NavLinks