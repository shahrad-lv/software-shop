import { Badge, IconButton, SwipeableDrawer, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { ImgLogo, Logo, StyledAppBar } from './Navbar.elements'
import React, { useEffect } from 'react'
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
    
    const products = useSelector(state => state.firestore.ordered.product);
    let TotalCount = 0;
    for (let x in products) {
        TotalCount += products[x].Count;
    }

    return (
      <>
        {['top'].map((anchor) => (
          <React.Fragment key={anchor}>

            <StyledAppBar position='static' elevation={0}>
                <Toolbar>
                <Logo id='logo'>
                    <ImgLogo src='http://rozup.ir/view/3271192/Logo-vol1.png'/>
                </Logo>

                <IconButton  id='NavIcon' color="inherit" aria-label="menu" onClick={top ? toggleDrawer(anchor, false) : toggleDrawer(anchor, true)} style={{zIndex: 100000}}>
                    <Badge color="secondary" variant="dot" invisible={TotalCount > 0 ? false : true} >
                    {top ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large'/>}
                    </Badge>
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
