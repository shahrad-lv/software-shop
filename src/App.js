import React, {useRef, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/layout/Home';
import About from './components/layout/About';
import styled, { ThemeProvider } from 'styled-components'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bounce, Circ, Expo, Back, Elastic } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);


const AppProvider = styled.div`
    position: relative;
    z-index: 10;
    /* background: #050B2B; */
    margin-bottom: 100vh;
    background: #fff;
`;






function App() {

  const revealRefs = useRef([]);
  revealRefs.current = [];


  useEffect(() => {
    
    revealRefs.current.forEach(() => {
        
      gsap.fromTo(("#test"),{
        background: '#050b2b'
      }, {
        duration: 2, 
        background: '#fff',
        ease: 'none',
        scrollTrigger: {
          trigger: ("#skills"),
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.fromTo(("#SkillTitle"),{
        y: 100,
      }, {
        duration: 1, 
        y: 0,
        ease: Elastic.easeOut,
        scrollTrigger: {
          trigger: ("#skills"),
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.fromTo((".SkillItmes"),{
        y: 100,
      }, {
        duration: 1, 
        y: 0,
        ease: Elastic.easeOut,
        scrollTrigger: {
          trigger: ("#skills"),
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

    });

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };

  return (
    <BrowserRouter>
      <>
      <Navbar />
      <AppProvider id='test' ref={addToRefs}>
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
