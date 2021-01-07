import React from 'react'
import { TweenMax, TimelineMax, Power3,Power2, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import gsap from 'gsap/gsap-core';
import { LoadContainer, LoadScreen } from './Barba.elements';

const Barba = ({pagename}) => {
    let screen = useRef(null);
    useEffect(() => {
      
        var tl = new TimelineMax();
        tl.to(("#background"),{
          background: '#fff',
          overflow: 'hidden',
          ease: 'none',
          duration: .0, 
        })
        tl.to(("#NavIcon"),{
          opacity: 0,
          ease: Power4.easeOut,
          duration: .0, 
        })
        tl.to(("#logo"),{
          opacity: 0,
          ease: Power4.easeOut,
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
        tl.to(("#NavIcon"),{
          opacity: 1,
          ease: Power2.easeOut,
          duration: .5, 
        })
        tl.to(("#logo"),{
          opacity: 1,
          ease: Power2.easeOut,
          duration: .5, 
        }, "-=.5")
        gsap.to(("#faded"),{
            opacity: "1",
            pointerEvents: "auto",
            ease: Power4.easeInOut,
            duration: .3, 
            delay: 2,
        })
        return () => {
            gsap.to(("#faded"),{
                opacity: "0",
                pointerEvents: 'none',
                ease: 'none',
                duration: 1, 
            })
        }
    });

    return (
      <LoadContainer>
        <LoadScreen ref={(el) => (screen = el)}>
          {pagename}
        </LoadScreen>
      </LoadContainer>
    )
}

export default Barba
