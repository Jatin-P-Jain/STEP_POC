import { SxProps, Theme } from "@mui/material/styles";

export const headerContainerSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: "#fff",
  pt: 3,
};

export const dashboardLabelSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

export const toggleButtonGroupSx: SxProps<Theme> = {
  display: "flex",
  gap: 0.7,
  "& .MuiToggleButtonGroup-grouped": {
    border: "1px solid #e0e0e0",
    borderRadius: 2,
    margin: 0,
  },
};

export const toggleButtonSx: SxProps<Theme> = {
  textTransform: "none",
  backgroundColor: "transparent",
  color: "text.primary",
  py: 0.5,
  fontSize: "80%",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
  "&.Mui-selected": {
    backgroundColor: "#000",
    color: "#fff",
    borderColor: "#000",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
};

export const sourceSelectContainerSx: SxProps<Theme> = {
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};

export const formControlSx: SxProps<Theme> = {
  minHeight: 0,
  height: 30,
  width: "30%",
  display: "flex",
  justifyContent: "center",
};

export const selectSx: SxProps<Theme> = {
  p: 0,
  height: "100%",
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
  },
};

export const spacerSx: SxProps<Theme> = { flexGrow: 1 };
