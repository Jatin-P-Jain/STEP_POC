import React from "react";
import { Drawer, Toolbar, Box, Typography, Divider, List } from "@mui/material";
import { sidebarData } from "../../data/mock_data/SideBarItems";
import { drawerSx, filterTitleSx } from "./Sidebar.styles";
import SidebarSection from "./SidebarSection";

export const drawerWidth = "18%";

const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent" sx={drawerSx}>
      {/* Offset for the AppBar */}
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <Typography variant="h6" sx={filterTitleSx}>
          Filters
        </Typography>
        <Divider />
        <List>
          {sidebarData.map((section) => (
            <SidebarSection
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
