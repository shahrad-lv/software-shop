import React from 'react'
import { FooterContainer, FooterCopyright, FooterLinks, FooterLink, StyledLink, FooterLogo, ImgLogo, FooterTitle } from './Footer.elements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo>
                <ImgLogo src='http://www.upsara.com/images/x058035_.png'/>
            </FooterLogo>
            <FooterTitle>ReactJs SoftWare Shop</FooterTitle>
            <FooterLinks>
                <FooterLink>
                    <StyledLink href="https://www.facebook.com/shahradking.kingshahrad.3">Facebook</StyledLink>
                </FooterLink>
                <FooterLink>
                    <StyledLink href="">LinkedIn</StyledLink>
                </FooterLink>
                <FooterLink>
                    <StyledLink href="">Telegram</StyledLink>
                </FooterLink>
                <FooterLink>
                    <StyledLink href="">Instagram</StyledLink>
                </FooterLink>
                <FooterLink>
                    <StyledLink href="">Twitter</StyledLink>
                </FooterLink>
            </FooterLinks>
            <FooterCopyright>Copyright ©2021 All rights reserved | Creator & Designer by Shahrad Gholizadeh</FooterCopyright>
        </FooterContainer>
    )
}

export default Footer
