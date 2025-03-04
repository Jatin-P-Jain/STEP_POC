import React from "react";
import { Box, IconButton } from "@mui/material";
import { iconImgStyle, iconsBoxSx, profileImgStyle } from "./TopBar.styles";
import { IconData, sideIcons } from "../../data/topBarSideIcons";

const IconButtons: React.FC = () => {
  return (
    <Box sx={iconsBoxSx}>
      {sideIcons.map((icon: IconData, index: number) => (
        <IconButton key={index} aria-label={icon.alt} disableRipple>
          <img
            src={icon.src}
            alt={icon.alt}
            style={icon.isProfile ? profileImgStyle : iconImgStyle(icon.size)}
          />
        </IconButton>
      ))}
    </Box>
  );
};

export default IconButtons;
