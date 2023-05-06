import { useState, useCallback } from "react";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContext from "./SnackBarContext";

const SnackbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const showSnackbar = useCallback((message, severity = "success") => {
    setSeverity(severity);
    setMessage(message);
    setIsOpen(true);
  }, []);

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={isOpen}
        autoHideDuration={1500}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        severity={severity}
        message={message}
      />
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;