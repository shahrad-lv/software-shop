import React from 'react'
import Header from './Header/Header'
import Services from './Services'
import Skills from './Skills'

const About = () => {
    return (
        <div>
            <Header pagename={'About'} />
            <Skills />
            <Services />
        </div>
    )
}

export default About
