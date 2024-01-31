import React from "react";
import {
  FooterContainer,
  FooterHeading,
  SocialIcons,
  SocialIconLink,
} from "./FooterStyles";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeading>Movie-app</FooterHeading>
      <SocialIcons>
        <SocialIconLink
          href="https://www.facebook.com/"
          target="_blank"
          aria-label="Facebook"
        >
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink
          href="https://twitter.com/"
          target="_blank"
          aria-label="Twitter"
        >
          <FaTwitter />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram />
        </SocialIconLink>
      </SocialIcons>
      <p>© {new Date().getFullYear()} Movie-app. All rights reserved</p>
    </FooterContainer>
  );
};

export default Footer;
