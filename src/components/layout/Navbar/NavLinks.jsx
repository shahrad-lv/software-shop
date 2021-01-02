import { Button } from '@material-ui/core'
import React from 'react'
import { NavContainer, NavLink } from './Navbar.elements'

const NavLinks = (props) => {

    return (
        <NavContainer >
            <NavLink>خانه</NavLink>
            <NavLink>نرم افزار</NavLink>
            <NavLink>آموزش ها</NavLink>
            <NavLink to='/about'>درباره ما</NavLink>
            <NavLink>حساب کاربری</NavLink>
            <NavLink>سبد خرید</NavLink>
        </NavContainer>
    )
}

export default NavLinks
