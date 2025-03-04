import React, { createContext, useContext, useState, ReactNode } from "react";

interface AlertContextProps {
  message: string;
  setMessage: (message: string) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const GlobalAlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [message, setMessage] = useState("");

  return (
    <AlertContext.Provider value={{ message, setMessage }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useGlobalAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useGlobalAlert must be used within a GlobalAlertProvider");
  }
  return context;
};
