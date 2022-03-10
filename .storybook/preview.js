// .storybook/preview.js

import { theme } from "../src/theme/theme";
import ThemeContext from "../src/theme/ThemeContext";

export const decorators = [
  (Story) => (
    <ThemeContext.Provider value={theme}>
      <Story />
    </ThemeContext.Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
