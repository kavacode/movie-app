import React from "react";
import { SidebarContainerStyled, SidebarLink } from "./SidebarStyles";

const Sidebar = () => {
  return (
    <SidebarContainerStyled>
      <SidebarLink to="/">Main</SidebarLink>
      <SidebarLink to="/favorites">Favorites</SidebarLink>
      <SidebarLink to="/search">Search</SidebarLink>
    </SidebarContainerStyled>
  );
};

export default Sidebar;
