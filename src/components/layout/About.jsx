import React from 'react'
import Barba from './Barba-effect/Barba'
import Header from './Header/Header'
import Services from './Services/Services'
import Skills from './Skills/Skills'
import { Faded } from '../../theme/globalStyle'

const About = () => {

    return (
        <>
        <Barba pagename={'درباره ما | About'}/>
        <Faded>
            <Header pagename={'About'} />
                <Skills />
            <Services />
        </Faded>
        </>
    )
}

export default About
