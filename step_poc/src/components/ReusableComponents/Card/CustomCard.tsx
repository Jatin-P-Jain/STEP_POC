import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  SxProps,
  Theme,
} from "@mui/material";
import { cardHeaderSx, titleSx } from "./CustomCard.styles";

interface ReusableCardProps {
  icon: React.ReactNode; // e.g., an SVG or MUI Icon component
  title: string;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const ReusableCard: React.FC<ReusableCardProps> = ({
  icon,
  title,
  children,
  sx,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
    >
      {/* Card Header with left icon and title */}
      <Box sx={cardHeaderSx}>
        {icon}
        <Typography variant="h6" sx={titleSx}>
          {title}
        </Typography>
      </Box>
      {/* Card Body */}
      <CardContent sx={{padding:0,px:1}}>{children}</CardContent>
    </Card>
  );
};

export default ReusableCard;
