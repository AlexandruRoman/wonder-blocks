import chroma from "chroma-js";
import { Theme } from "./theme";

export function getContrastColor(theme: Theme, variantColor: string) {
  return chroma.contrast(variantColor, theme.colors.textDark.default) > 4.5
    ? theme.colors.textDark.default
    : theme.colors.textLight.default;
}
