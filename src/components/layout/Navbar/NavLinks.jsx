import React from 'react'
import { NavContainer, NavLink } from './Navbar.elements'
import { useDispatch } from "react-redux";
import { navtoggle } from "../../../redux/Reducers/navbarReducer";

const NavLinks = () => {
    const dispatch = useDispatch();
    const handleClose = () =>  {
        dispatch(navtoggle());
    };

    return (
        <NavContainer >
            <NavLink onClick={handleClose} to='/'>خانه</NavLink>
            <NavLink>نرم افزار</NavLink>
            <NavLink>آموزش ها</NavLink>
            <NavLink onClick={handleClose} to='/about'>درباره ما</NavLink>
            <NavLink>حساب کاربری</NavLink>
            <NavLink>سبد خرید</NavLink>
        </NavContainer>
    )
}

export default NavLinks
