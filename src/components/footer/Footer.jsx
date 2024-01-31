import React from 'react';
import { FooterContainer, FooterHeading } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeading>Movie-app</FooterHeading>
      <p>© {new Date().getFullYear()} Movie-app. All rights reserved</p>
    </FooterContainer>
  );
}

export default Footer;
