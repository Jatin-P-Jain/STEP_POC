import { SxProps, Theme } from "@mui/material/styles";

export const appBarSx: SxProps<Theme> = (theme) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.paper,
});

export const logoBoxSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flex: 1,
};

export const logoImgStyle: React.CSSProperties = {
  width: "50%",
  height: "70%",
};

export const tabsSx: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  textTransform: "none",
  flex: 2,
};

export const tabIndicatorProps = {
  style: { display: "none" },
};

export const iconsBoxSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flex: 1,
  justifyContent: "flex-end",
};

export const iconImgStyle = (size: number): React.CSSProperties => ({
  width: size,
  height: size,
});

export const profileImgStyle: React.CSSProperties = {
  width: 24,
  height: 24,
  borderRadius: "50%",
};
