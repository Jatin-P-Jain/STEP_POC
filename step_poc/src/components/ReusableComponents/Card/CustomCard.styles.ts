import { SxProps, Theme } from "@mui/material/styles";

export const cardHeaderSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  padding: 2,
};

export const titleSx: SxProps<Theme> = {
  fontFamily: "Open Sans, sans-serif",
  color: "text.primary",
  fontWeight: 700,
  marginLeft: 1,
};
