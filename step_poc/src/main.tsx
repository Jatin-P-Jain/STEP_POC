import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// MUI imports
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#263959",
    },
    secondary: {
      main: "#757575",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    // Ensure headings use the primary color
    h1: { color: "#263959" },
    h2: { color: "#263959" },
    h3: { color: "#263959" },
    h4: { color: "#263959" },
    h5: { color: "#263959" },
    h6: { color: "#263959" },
    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none", // This disables uppercase transformation for tab labels
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
