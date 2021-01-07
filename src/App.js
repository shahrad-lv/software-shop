import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/layout/Home';
import About from './components/layout/About';
import styled from 'styled-components'
import  gsap  from 'gsap';
import { AppProvider } from './theme/globalStyle'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bounce, Circ, Expo,Power4, Back, Elastic, Power2 } from 'gsap/gsap-core';

gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
  
    ScrollTrigger.create({
      trigger: '#skills',
      onEnter: (() => {
        gsap.to(("#background"),{
          background: '#fff',
          ease: 'none',
          duration: .5, 
        })
      }),
      onLeave: (() => {
        gsap.to(("#background"),{
          background: '#050b2b',
          ease: 'none',
          duration: .5, 
        })
      }),
      onEnterBack: (() => {
        gsap.to(("#background"),{
          background: '#fff',
          ease: 'none',
          duration: .5, 
        })
      }),
      onLeaveBack: (() => {
        gsap.to(("#background"),{
          background: '#050b2b',
          ease: 'none',
          duration: .5, 
        })
      }),
      start: 'top center+=150',
    })

  }, []);

  // NavIcon
  useEffect(() => {
  
    ScrollTrigger.create({
      trigger: '#skills',
      onEnter: (() => {
        gsap.to(("#NavIcon"),{
          color: '#050b2b',
          ease: 'none',
          duration: .5, 
        })
      }),
      onLeave: (() => {
        gsap.to(("#NavIcon"),{
          color: '#fff',
          ease: 'none',
          duration: .5, 
        })
      }),
      onEnterBack: (() => {
        gsap.to(("#NavIcon"),{
          color: '#050b2b',
          ease: 'none',
          duration: .5, 
        })
      }),
      onLeaveBack: (() => {
        gsap.to(("#NavIcon"),{
          color: '#fff',
          ease: 'none',
          duration: .5, 
        })
      }),
      start: 'top center+=150',
    })

  }, []);

  // SkillTitle
  useEffect(() => {
  
    ScrollTrigger.create({
      trigger: '#skills',
      onEnter : (() => {
        gsap.to(("#SkillTitle"),{
          y: -200,
          opacity: 1,
          ease: Circ.easeOut,
          duration: .5,
        })
      }),
      onLeave: (() => {
        gsap.to(("#SkillTitle"),{
          opacity: 0,
          y: 100,
          ease: 'none',
          duration: .5,
        })
      }),
      onEnterBack: (() => {
        gsap.to(("#SkillTitle"),{
          y: -200,
          opacity: 1,
          ease: Circ.easeOut,
          duration: .5,
        })
      }),
      onLeaveBack: (() => {
        gsap.to(("#SkillTitle"),{
          opacity: 0,
          y: 100,
          ease: 'none',
          duration: .5,
        })
      }),
      start: 'top center+=100',
    })

  }, []);

  // SkillItmes
  useEffect(() => {
  
    ScrollTrigger.create({
      trigger: '#skills',
      onEnter : (() => {
        gsap.to(("#SkillItmes"),{
          delay: 0.2,
          y: -200,
          opacity: 1,
          ease: Circ.easeOut,
          duration: .5,
        })
      }),
      onLeave: (() => {
        gsap.to(("#SkillItmes"),{
          opacity: 0,
          y: 100,
          ease: 'none',
          duration: .5,
        })
      }),
      onEnterBack: (() => {
        gsap.to(("#SkillItmes"),{
          delay: 0.2,
          y: -200,
          opacity: 1,
          ease: Circ.easeOut,
          duration: .5,
        })
      }),
      onLeaveBack: (() => {
        gsap.to(("#SkillItmes"),{
          opacity: 0,
          y: 100,
          ease: 'none',
          duration: .5,
        })
      }),
      start: 'top center+=100',
    })

  }, []);



  return (
    <BrowserRouter>
      <Navbar />
      <AppProvider id='background'>
        <Switch>
            <Route exact path='/'component={Home} />
            <Route path='/about'component={About} />
        </Switch>
      </AppProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
