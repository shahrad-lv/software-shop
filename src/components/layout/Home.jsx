import React, { useEffect, useState } from 'react'
import Barba from './Barba-effect/Barba';
import { Faded } from '../../theme/globalStyle'
import About from './About';

const Home = () => {

    return (
      <>
      <Barba pagename={'خانه | Home'}/>
        <Faded>
          <About />
        </Faded>
      </>
    )
}

export default Home
