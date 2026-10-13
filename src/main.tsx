import React, { useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import "./index.css";
import { createAppTheme } from "./theme";
import { ThemeModeProvider, useThemeMode } from "./theme-mode";
import { setupHeaderScrollEffect } from "./scroll-effect";

function Root() {
  const { mode } = useThemeMode();
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  useEffect(() => {
    setupHeaderScrollEffect();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <Root />
    </ThemeModeProvider>
  </React.StrictMode>,
);
