// src/App.tsx
import React from "react";
import { Box, CssBaseline } from "@mui/material";
import TopBar from "./components/TopBar/TopBar";
import Sidebar from "./components/SideBar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import { GlobalAlertProvider } from "./Contexts/GlobalAlertContext";
import GlobalAlert from "./components/ReusableComponents/Alerts/GlobalAlert";

const App: React.FC = () => {
  return (
    <GlobalAlertProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <GlobalAlert />
        <TopBar />
        <Sidebar />
        <MainContent />
      </Box>
    </GlobalAlertProvider>
  );
};

export default App;
