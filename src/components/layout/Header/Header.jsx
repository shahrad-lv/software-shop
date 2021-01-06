import React, { useRef, useEffect } from 'react'
import { Description, DistortionContainer, Line, DescriptionLine, PageNameLine, HeaderContainer, HeaderContent, PageName, Title } from './Header.elements'
import displacement from './images/displacement.jpg'
import compostions1 from './images/compostions1.jpg'
import compostions2 from './images/compostions2.jpg'
import compostions3 from './images/compostions3.jpg'
import hoverEffect from 'hover-effect'
import gsap, { Power4 } from 'gsap/gsap-core'

const Header = ({pagename}) => {

    const container = useRef();

    useEffect(() => {
        new hoverEffect({
          parent: container.current,
          intensity: 1,
          image1: compostions1,
          image2: pagename === 'Home' ? compostions3 : compostions2,
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
                <PageNameLine><PageName className='HeaderTitle'> {pagename} Page  </PageName></PageNameLine>
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
