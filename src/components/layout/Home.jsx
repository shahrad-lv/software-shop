import React, { useEffect, useState } from 'react'
import Barba from './Barba-effect/Barba';
import { Faded } from '../../theme/globalStyle'
import About from './About';
import Shop from './Shop';
import Products from './Products/Products';

const Home = () => {

    return (
      <>
      <Barba pagename={'خانه | Home'}/>
        <Faded>
          <About />
          <Products />
        </Faded>
      </>
    )
}

export default Home
