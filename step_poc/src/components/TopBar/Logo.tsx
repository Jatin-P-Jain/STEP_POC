import React from "react";
import { Box } from "@mui/material";
import { logoBoxSx, logoImgStyle } from "./TopBar.styles";
import KePSLALogo from "../../assets/KePSLA.svg";

const Logo: React.FC = () => {
  return (
    <Box sx={logoBoxSx}>
      <img src={KePSLALogo} alt="KePSLA Logo" style={logoImgStyle} />
    </Box>
  );
};

export default Logo;
