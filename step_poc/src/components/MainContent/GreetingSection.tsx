import React from "react";
import { Box, Typography } from "@mui/material";
import { greetingContainerSx, greetingDateSx } from "./MainContent.styles";

// You can also use the useTheme hook if you prefer:
// import { useTheme } from "@mui/material/styles";

interface GreetingSectionProps {
  userName: string;
  todayDate: string;
}

const GreetingSection: React.FC<GreetingSectionProps> = ({
  userName,
  todayDate,
}) => {
  return (
    <Box sx={greetingContainerSx}>
      <Typography variant="h6">Hello, {userName}</Typography>
      <Typography sx={greetingDateSx}>{todayDate}</Typography>
    </Box>
  );
};

export default GreetingSection;
