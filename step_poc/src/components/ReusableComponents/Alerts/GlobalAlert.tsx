import React from "react";
import { useGlobalAlert } from "../../../Contexts/GlobalAlertContext";
import { Alert, Box } from "@mui/material";

const GlobalAlert: React.FC = () => {
  const { message } = useGlobalAlert();

  if (!message) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <Alert severity="info" variant="filled">
        {message}
      </Alert>
    </Box>
  );
};

export default GlobalAlert;
