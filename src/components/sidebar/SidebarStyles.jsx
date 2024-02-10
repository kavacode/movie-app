import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainerStyled = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
