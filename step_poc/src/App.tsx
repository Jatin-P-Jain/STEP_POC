// src/App.tsx
import React from "react";
import { Box, CssBaseline } from "@mui/material";
import TopBar from "./components/TopBar/TopBar";
import Sidebar from "./components/SideBar/Sidebar";
import MainContent from "./components/MainContent/MainContent";

const App: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar />
      <Sidebar />
      <MainContent />
    </Box>
  );
};

export default App;
