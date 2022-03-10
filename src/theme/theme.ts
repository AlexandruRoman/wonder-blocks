export type Theme = {
  fontFamilies: FontFamilies;
  space: string[];
  fontSizes: string[];
  fontWeights: number[];
  colors: ColorTypes;
};

export type FontFamilies = {
  body: string;
  heading: string;
  monospace: string;
};

export type ColorTypes = {
  textDark: ColorStates;
  textLight: ColorStates;
} & Record<Color, ColorStates>;

export type ColorStates = {
  default: string;
  hover: string;
  active: string;
};

export type Color =
  | "primary"
  | "secondary"
  | "tertiary"
  | "delete"
  | "info"
  | "success";

export const theme: Theme = {
  space: ["0px", "4px", "8px", "16px", "32px"],
  fontFamilies: {
    body: "'Poppins'",
    heading: '"Lora", sans-serif',
    monospace: "Space Mono, monospace",
  },
  fontSizes: ["16px", "24px", "40px"],
  fontWeights: [400, 700],
  colors: {
    textDark: {
      default: "#121418",
      hover: "#121418",
      active: "#121418",
    },
    textLight: {
      default: "white",
      hover: "white",
      active: "white",
    },
    primary: {
      default: "#6FC475",
      hover: "#7dca83",
      active: "#8cd091",
    },
    secondary: {
      default: "#FFD763",
      hover: "#e6bf35",
      active: "#e6bf35",
    },
    tertiary: {
      default: "#121418",
      hover: "#2a2c2f",
      active: "white",
    },
    delete: {
      default: "#ffd43b",
      hover: "#e6bf35",
      active: "#e6bf35",
    },
    info: {
      default: "#ffd43b",
      hover: "#e6bf35",
      active: "#e6bf35",
    },
    success: {
      default: "#ffd43b",
      hover: "#e6bf35",
      active: "#e6bf35",
    },
  },
};
