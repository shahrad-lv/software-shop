import React, { useEffect, useState } from 'react'
import Barba from './Barba-effect/Barba';
import { Faded } from '../../theme/globalStyle'
import Products from './Products/Products';
import Header from './Header/Header';

const Shop = () => {

    return (
      <>
      <Barba pagename={'فروشگاه | Shop'}/>
        <Faded>
            <Header />
            <Products />
        </Faded>
      </>
    )
}

export default Shop
