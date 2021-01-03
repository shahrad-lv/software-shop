import { AppBar, Button, IconButton, makeStyles, SwipeableDrawer, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { ImgLogo, Logo } from './Navbar.elements'
import React from 'react'
import NavLinks from './NavLinks'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { navtoggle } from "../../../redux/store/NavbarReducer";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    AppBar_mui:{
      background: '#050b2b',
    }, 
    title: {
      flexGrow: 1,
    },
}));

const Navbar = () => {
    const dispatch = useDispatch();

    const classes = useStyles();

    const top = useSelector((state) => state.navbar.top);

    const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      dispatch(navtoggle());
    };

  
    const list = (anchor) => (
      <NavLinks/>
    );
  
    return (
      <div>
        {['top'].map((anchor) => (
          <React.Fragment key={anchor}>
            <AppBar position="static" className={classes.AppBar_mui}>
                <Toolbar>
                <Logo className={classes.title}>
                    <ImgLogo src='http://rozup.ir/view/3271192/Logo-vol1.png'/>
                </Logo>
                <Button >Open</Button>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={top ? toggleDrawer(anchor, false) : toggleDrawer(anchor, true)} style={{zIndex: 100000}}>
                    {top ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large'/>}
                </IconButton>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
              anchor={anchor}
              open={top}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
}

export default Navbar
