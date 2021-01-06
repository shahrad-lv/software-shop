import React from 'react'
import Header from './Header/Header'
import Services from './Services/Services'
import Skills from './Skills/Skills'
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

const Home = () => {
    
    let screen = useRef(null);
    let body = useRef(null);
    useEffect(() => {
      
        var tl = new TimelineMax();
        tl.to(("#background"),{
          background: '#fff',
          overflow: 'hidden',
          ease: 'none',
          duration: .0, 
        })
        tl.to(screen, {
          duration: 1.2,
          height: "100%",
          ease: Power3.easeInOut,
        });
        tl.to(screen, {
          duration: 1,
          top: "100%",
          ease: Power3.easeInOut,
          delay: 0.3,
        })
        tl.to(("#background"),{
          background: '#050b2b',
          ease: 'none',
          duration: .0, 
        })
        TweenMax.to(body, .3, {css: {
          opacity: "1",
          pointerEvents: "auto",
          ease: Power4.easeInOut
        }}).delay(2);
        return () => {
          TweenMax.to(body, 1, {css: {
            opacity: "0",
            pointerEvents: 'none'
          }});
      }
      });
    return (
        <>
        <div className="load-container">
            <div className="load-screen1" ref={(el) => (screen = el)}>
            </div>
        </div>
        <div data-barba="container" className="Home">
            <div ref={(el) => (body = el)} className="faded">
                <Header pagename={'Home'} />
                <Skills />
                <Services />
            </div>
        </div>
        </>
    )
}

export default Home
