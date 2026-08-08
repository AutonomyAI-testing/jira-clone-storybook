import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
// Polyfill process globals to support Node.js references in browser context

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public/avatars", "../public/fonts", "../public/images"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {},
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // Polyfill Node.js process globals for Storybook in Vite.
  // Some components or dependencies may reference Node APIs (process.env, process.browser, etc.)
  // which are not available in the browser environment. This ensures they're defined.
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        "process.env": {},
        "process.browser": true,
        "process.version": JSON.stringify("v18.0.0"),
        "process.versions": JSON.stringify({ node: "18.0.0" }),
      },
    });
  },
};
export default config;
