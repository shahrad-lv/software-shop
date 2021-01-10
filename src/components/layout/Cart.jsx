import React, { useEffect, useState } from 'react'
import Barba from './Barba-effect/Barba';
import { Faded } from '../../theme/globalStyle'
import CartProducts from './Cart/CartProducts';
import Payment from './Cart/Payment'
import Header from './Header/Header';
import { Grid } from '@material-ui/core';
import { GridContainer, ItemContainer } from './Cart/Cart.elements';
const Cart = () => {

    return (
      <>
      <Barba pagename={'سبد خرید | Cart'}/>
        <Faded>
        <Header />
        <GridContainer container>
            <Grid item xs={1}/>
            <ItemContainer item  xs={12} md={10}>
                <CartProducts />
                <Grid item xs={1}/>
                <Payment />
            </ItemContainer>
            <Grid item xs={1} />
        </GridContainer>
        </Faded>
      </>
    )
}

export default Cart