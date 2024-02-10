import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #0f0f0f;
  color: #f8f8f8;
`;

const Heading = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

const StarWarsReference = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

const NotFoundStyles = {
  Container,
  Heading,
  Description,
  StarWarsReference,
};

export default NotFoundStyles;
