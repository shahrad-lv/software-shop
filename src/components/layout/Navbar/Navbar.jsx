import { IconButton, SwipeableDrawer, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { ImgLogo, Logo, StyledAppBar } from './Navbar.elements'
import React from 'react'
import NavLinks from './NavLinks'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { navtoggle } from "../../../redux/Reducers/navbarReducer";


const Navbar = () => {

    const dispatch = useDispatch();
    const top = useSelector((state) => state.navbar.top);

    // navbar toggle f
    const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      dispatch(navtoggle());
    };
  
    return (
      <>
        {['top'].map((anchor) => (
          <React.Fragment key={anchor}>

            <StyledAppBar position='static' elevation={0}>
                <Toolbar>
                <Logo>
                    <ImgLogo src='http://rozup.ir/view/3271192/Logo-vol1.png'/>
                </Logo>
                <IconButton edge="start" id='NavIcon' color="inherit" aria-label="menu" onClick={top ? toggleDrawer(anchor, false) : toggleDrawer(anchor, true)} style={{zIndex: 100000}}>
                    {top ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large'/>}
                </IconButton>
                </Toolbar>
            </StyledAppBar>

            <SwipeableDrawer anchor={anchor} open={top} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
              <NavLinks/>
            </SwipeableDrawer>

          </React.Fragment>
        ))}
      </>
    );
}

export default Navbar
