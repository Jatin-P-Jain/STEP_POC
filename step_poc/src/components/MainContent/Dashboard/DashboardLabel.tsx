import React from "react";
import { Box, Typography } from "@mui/material";
import DashBoardIcon from "../../../assets/Icons/dashboard-icon.svg";
import { dashboardLabelSx } from "./Dashboard.styles";

const DashboardLabel: React.FC = () => {
  return (
    <Box sx={dashboardLabelSx}>
      <img
        src={DashBoardIcon}
        alt="Dashboard Icon"
        style={{ width: 14, height: 14, marginRight: "5%" }}
      />
      <Typography variant="h6" color="text.secondary">
        Dashboard
      </Typography>
    </Box>
  );
};

export default DashboardLabel;
