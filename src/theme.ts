import { createTheme } from "@mui/material";
import type { ThemeMode } from "./theme-mode";

export function createAppTheme(mode: ThemeMode) {
  return createTheme({
    palette: {
      mode,
      primary: { main: "#c7fa62" },
      background: mode === "light"
        ? { default: "#f4f3ee", paper: "#ffffff" }
        : { default: "#101010", paper: "#191919" },
      text: mode === "light"
        ? { primary: "#17170f", secondary: "#4b4b42" }
        : { primary: "#f5f5f0", secondary: "#a8a8a2" },
    },
    typography: {
      fontFamily: '"Manrope", sans-serif',
      button: { textTransform: "none", fontWeight: 700 },
    },
    shape: { borderRadius: 14 },
  });
}