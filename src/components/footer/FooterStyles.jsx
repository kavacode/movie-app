import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1976d2;
  padding: 5px;
  color: white;
  text-align: center;
`;

export const FooterHeading = styled.h3`
  margin-bottom: 10px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 24px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #00f;
  }
`;
