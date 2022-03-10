import { createContext, useContext } from "react";
import { theme } from "./theme";

const ThemeContext = createContext(theme);

export default ThemeContext;

export function useTheme() {
  return useContext(ThemeContext);
}
