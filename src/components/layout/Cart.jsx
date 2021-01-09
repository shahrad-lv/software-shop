import React, { useEffect, useState } from 'react'
import Barba from './Barba-effect/Barba';
import { Faded } from '../../theme/globalStyle'
import CartProducts from './Cart/CartProducts';
import Payment from './Cart/Payment'
import Header from './Header/Header';
import { Grid } from '@material-ui/core';
import { GridContainer } from './Cart/Cart.elements';
const Cart = () => {

    return (
      <>
      <Barba pagename={'سبد خرید | Cart'}/>
        <Faded>
        <Header />
        <GridContainer container>
            <Grid item sm={1}/>
            <Grid item container lg={10}>
                    <Payment />
                    <Grid item sm={1} />
                    <CartProducts />
            </Grid>
            <Grid item sm={1}/>
        </GridContainer>
        </Faded>
      </>
    )
}

export default Cart