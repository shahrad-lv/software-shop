import React from 'react'
import Header from './Header/Header'
import Services from './Services/Services'
import Skills from './Skills/Skills'

const Home = () => {
    return (
        <div>
            <Header pagename={'Home'} />
            <Skills />
            <Services />
        </div>
    )
}

export default Home
