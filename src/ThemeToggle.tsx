import { Moon, Sun } from "lucide-react";
import { IconButton } from "@mui/material";
import { useThemeMode } from "./theme-mode";

export default function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode();
  const isLight = mode === "light";
  return (
    <IconButton 
      className="theme-toggle" 
      onClick={toggleMode} 
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      title={`Switch to ${isLight ? "dark" : "light"} mode`}
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </IconButton>
  );
}