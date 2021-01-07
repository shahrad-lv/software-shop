import React from 'react'
import Header from './Header/Header'
import Services from './Services/Services'
import Skills from './Skills/Skills'
import Barba from './Barba-effect/Barba';
import { Faded } from '../../theme/globalStyle'

const Home = () => {
    
    return (
      <>
      <Barba pagename={'خانه | Home'}/>
        <Faded>
          <Header pagename={'Home'} />
          <Skills />
          <Services />
        </Faded>
      </>
    )
}

export default Home
