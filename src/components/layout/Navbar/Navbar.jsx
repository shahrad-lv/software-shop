import { AppBar, IconButton, makeStyles, SwipeableDrawer, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { ImgLogo, Logo } from './Navbar.elements'
import React from 'react'
import NavLinks from './NavLinks'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { navtoggle } from "../../../redux/store/NavbarReducer";

// custom Style Material UI
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    AppBar_mui:{
      background: '#050b2b',
      position: 'fixed',
      zIndex: 1000000,
    }, 
    title: {
      flexGrow: 1,
    },
}));

const Navbar = () => {

    const classes = useStyles();
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

            <AppBar position='static' elevation={0} className={classes.AppBar_mui}>
                <Toolbar>
                <Logo className={classes.title}>
                    <ImgLogo src='http://rozup.ir/view/3271192/Logo-vol1.png'/>
                </Logo>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={top ? toggleDrawer(anchor, false) : toggleDrawer(anchor, true)} style={{zIndex: 100000}}>
                    {top ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large'/>}
                </IconButton>
                </Toolbar>
            </AppBar>

            <SwipeableDrawer anchor={anchor} open={top}>
              <NavLinks/>
            </SwipeableDrawer>

          </React.Fragment>
        ))}
      </>
    );
}

export default Navbar
