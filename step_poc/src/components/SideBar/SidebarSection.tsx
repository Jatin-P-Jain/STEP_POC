import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Collapse,
  Checkbox,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { listItemContainerSx, listItemTextItemSx, listItemTextTitleSx } from "./Sidebar.styles";

interface SidebarSectionProps {
  title: string;
  items: string[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <>
      <ListItemButton onClick={toggleOpen} disableRipple>
        <ListItemText primary={title} sx={listItemTextTitleSx} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item) => (
            <ListItem key={item} sx={listItemContainerSx}>
              <Checkbox disableRipple />
              <ListItemText primary={item} sx={listItemTextItemSx} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SidebarSection;
