import styled from "styled-components";
import { SidebarContainerStyled } from "./components/sidebar/SidebarStyles";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
`;

export const SidebarContainer = styled(SidebarContainerStyled)`
  flex: 0 0 200px;
  background-color: #d21976;
  padding: 20px;
  /* доп настройки */
`;
