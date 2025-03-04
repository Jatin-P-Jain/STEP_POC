import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { appBarSx } from "./TopBar.styles";
import Logo from "./Logo";
import TabsNavigation from "./Tabs";
import IconButtons from "./SideIconsButtons";

const AppBarTabs: React.FC = () => {
  return (
    <AppBar position="fixed" sx={appBarSx}>
      <Toolbar>
        <Logo />
        <TabsNavigation />
        <IconButtons />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarTabs;
