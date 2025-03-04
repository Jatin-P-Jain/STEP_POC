import { SxProps, Theme } from "@mui/material/styles";

export const mainContentSx: SxProps<Theme> = {
  flexGrow: 1,
  p: 2,
};

export const contentRowSx: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  alignItems: "center",
};

export const greetingContainerSx: SxProps<Theme> = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const regionSelectContainerSx: SxProps<Theme> = {
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};

export const regionFormControlSx: SxProps<Theme> = {
  minHeight: 0,
  height: 30,
  width: "30%",
  display: "flex",
  justifyContent: "center",
};

export const regionSelectSx: SxProps<Theme> = {
  p: 0,
  height: "100%",
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
  },
};

export const greetingTitleSx: SxProps<Theme> = {
  // You can adjust the variant or fontSize if needed.
};

export const greetingDateSx: SxProps<Theme> = (theme: Theme) => ({
  fontSize: "80%",
  color: theme.palette.secondary.main,
});
