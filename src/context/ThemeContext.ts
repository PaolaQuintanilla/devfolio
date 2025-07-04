import { createContext, type Dispatch, type SetStateAction } from "react";

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});
