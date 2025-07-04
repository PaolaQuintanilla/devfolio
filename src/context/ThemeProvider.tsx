import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, toggleDarkMode] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode: isDarkMode === "dark", toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
