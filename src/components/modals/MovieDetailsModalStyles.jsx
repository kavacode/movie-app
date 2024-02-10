import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
`;

export const PosterContainer = styled.div`
  position: relative;
`;

export const PosterImage = styled.img`
  width: 100%;
  max-height: 400px; // Adjust as needed
  cursor: pointer;
`;

export const LargerPreview = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  max-height: 500px;
`;
