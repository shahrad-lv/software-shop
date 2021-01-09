import React, { useRef, useEffect, useState } from 'react'
import { Description, DistortionContainer, Line, DescriptionLine, PageNameLine, HeaderContainer, HeaderContent, PageName, Title } from './Header.elements'
import displacement from './images/displacement.jpg'
import compostions1 from './images/compostions1.jpg'
import Home from './images/Home.jpg'
import Shop from './images/Shop.jpg'
import hoverEffect from 'hover-effect'
import gsap, { Power4 } from 'gsap/gsap-core'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    const [name, setName] = useState(location.pathname)

    const container = useRef();

    useEffect(() => {
        new hoverEffect({
          parent: container.current,
          intensity: 1,
          image1: compostions1,
          image2: name  == '/' ? Home : name == '/shop' ? Shop : Home,
          displacementImage: displacement,
          imagesRatio: .55,
          speedIn: .9,
          speedOut: 1.2,
        });
      }, [container]);

      useEffect(() => {
        gsap.from((".HeaderTitle"),{
            y: 250,
            skewY: 10,
            ease: Power4.easeOut,
            duration: 1.8, 
            delay: 2,
        })
    }, []);
      
    return (

        <HeaderContainer>
            <DistortionContainer id="imgContainer" ref={container} />
            <HeaderContent>
                <PageNameLine><PageName className='HeaderTitle'> {name  == '/' ? 'Home' : name == '/about' ? 'About' : name == '/shop' ? 'Shop' : 'Cart'} Page  </PageName></PageNameLine>
                <Line><Title className='HeaderTitle'>React</Title></Line>
                <Line><Title className='HeaderTitle'>Software Shop</Title></Line>
                <DescriptionLine>
                    <Description className='HeaderTitle'>Created By Shahrad Gholizadeh with ReactJS / Redux / Firebase / Styled Components  Material UI / GSAP and more ...</Description>
                </DescriptionLine>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header
