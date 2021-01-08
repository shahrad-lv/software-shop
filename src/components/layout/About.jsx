import React, { useEffect } from 'react'
import Barba from './Barba-effect/Barba'
import Header from './Header/Header'
import Services from './Services/Services'
import Skills from './Skills/Skills'
import { Faded } from '../../theme/globalStyle'
import  gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bounce, Circ, Expo,Power4, Back, Elastic, Power2 } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
        <>
        <Barba pagename={'درباره ما | About'}/>
        <Faded>
            <Header />
                <Skills />
            <Services />
        </Faded>
        </>
    )
}

export default About
