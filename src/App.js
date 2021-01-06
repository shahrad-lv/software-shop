import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/layout/Home';
import About from './components/layout/About';
import styled, { ThemeProvider } from 'styled-components'
import  gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bounce, Circ, Expo, Back, Elastic, Power2 } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);


const AppProvider = styled.div`
    position: relative;
    z-index: 10;
    /* background: #050B2B; */
    margin-bottom: 100vh;
    background: #fff;
`;






function App() {


  useEffect(() => {
  
    ScrollTrigger.create({
      trigger: '#skills',
      onEnter: (() => {
        console.log('onEnter')
        gsap.to(("#test"),{
          background: '#fff',
          ease: 'none',
          duration: .5, 
        })
      }),
      onLeave: (() => {
        console.log('onLeave')
        gsap.to(("#test"),{
          background: '#050b2b',
          ease: 'none',
          duration: .5, 
        })
      }),
      onEnterBack: (() => {
        gsap.to(("#test"),{
          background: '#fff',
          ease: 'none',
          duration: .5, 
        })
      }),
      onLeaveBack: (() => {
        gsap.to(("#test"),{
          background: '#050b2b',
          ease: 'none',
          duration: .5, 
        })
      }),
      start: 'top center+=100',
    })

  }, []);


  return (
    <BrowserRouter>
      <>
      <Navbar />
      <AppProvider id='test'>
        <Switch>
            <Route exact path='/'component={Home} />
            <Route path='/about'component={About} />
        </Switch>
      </AppProvider>
      <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
