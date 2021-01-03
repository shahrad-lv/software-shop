import React, { useRef, useEffect } from 'react'
import { Description, DistortionContainer, HeaderContainer, HeaderContent, PageName, Title } from './Header.elements'
import displacement from './images/displacement.jpg'
import compostions1 from './images/compostions1.jpg'
import compostions2 from './images/compostions2.jpg'
import compostions3 from './images/compostions3.jpg'
import hoverEffect from 'hover-effect'

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
      
    return (
        <HeaderContainer>
            <DistortionContainer id="imgContainer" ref={container} />
            <HeaderContent>
                <PageName> {pagename} Page  </PageName>
                <Title>React</Title>
                <Title>Software Shop</Title>
                <Description>Created By Shahrad Gholizadeh with ReactJS / Redux / Firebase / Styled Components  Material UI / GSAP and more ...</Description>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header
