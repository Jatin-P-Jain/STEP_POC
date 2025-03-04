import React, { useState, MouseEvent } from "react";
import { Box } from "@mui/material";
import DashboardLabel from "./DashboardLabel";
import TimeRangeToggle from "./TimeRangeToggle";
import {
  headerContainerSx,
  sourceSelectContainerSx,
  spacerSx,
} from "./Dashboard.styles";
import SourceSelect from "./SourceSelect";

const DashboardHeader: React.FC = () => {
  const [timeRange, setTimeRange] = useState("today");
  const [region, setRegion] = useState("");

  const handleTimeRange = (
    event: MouseEvent<HTMLElement>,
    newRange: string | null
  ) => {
    if (newRange !== null) {
      setTimeRange(newRange);
    }
  };

  const handleRegionChange = (event: any) => {
    setRegion(event.target.value);
  };

  return (
    <>
      <Box sx={headerContainerSx}>
        <DashboardLabel />
        <TimeRangeToggle timeRange={timeRange} onChange={handleTimeRange} />
      </Box>
      <Box sx={headerContainerSx}>
        <Box sx={spacerSx} />
        <Box sx={sourceSelectContainerSx}>
          <SourceSelect region={region} onChange={handleRegionChange} />
        </Box>
      </Box>
    </>
  );
};

export default DashboardHeader;
