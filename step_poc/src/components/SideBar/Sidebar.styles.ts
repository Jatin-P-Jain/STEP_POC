import { SxProps, Theme } from "@mui/material/styles";

export const drawerSx: SxProps<Theme> = {
  width: "18%",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "18%",
    boxSizing: "border-box",
    borderRight: "none", // Remove right border if desired
  },
};

export const filterTitleSx: SxProps<Theme> = {
  padding: 2,
  fontWeight: 700,
  fontSize: "95%",
};

export const listItemTextTitleSx: SxProps<Theme> = (theme: Theme) => ({
  "& .MuiTypography-root": {
    fontSize: "90%",
    textTransform: "uppercase",
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
});

export const listItemTextItemSx: SxProps<Theme> = {
  "& .MuiTypography-root": {
    fontSize: "90%",
  },
};

export const listItemContainerSx: SxProps<Theme> = {
  padding: 0,
  paddingLeft: 4,
};
