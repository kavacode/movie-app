import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #1976d2;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const SearchBar = styled.input`
  flex-grow: 1;
  width: auto;
  max-width: 500px;
  margin: 0 10px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

export const AuthIcon = styled.div`
  color: white;
  font-size: 24px;
  cursor: pointer;
`;
