import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import GreetingSection from "./GreetingSection";
import RegionSelect from "./RegionSelect";
import { mainContentSx, contentRowSx } from "./MainContent.styles";
import DashboardHeader from "./Dashboard/DashboardHeader";
import DashboardGrid from "./Dashboard/Dashboard";

const MainContent: React.FC = () => {
  const [region, setRegion] = useState("");

  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleChange = (event: any) => {
    setRegion(event.target.value);
  };

  return (
    <Box component="main" sx={mainContentSx}>
      <Toolbar />
      <Box sx={contentRowSx}>
        {/* Left: Greeting Section */}
        <GreetingSection userName="John" todayDate={todayDate} />
        {/* Right: Region Select */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <RegionSelect region={region} onChange={handleChange} />
        </Box>
      </Box>
      <DashboardHeader />
      <DashboardGrid />
    </Box>
  );
};

export default MainContent;
