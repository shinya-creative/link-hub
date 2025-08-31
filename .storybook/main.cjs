/** @type { import('@storybook/react-vite').StorybookConfig } */
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin');
const react = require('@vitejs/plugin-react');
const path = require('path');

module.exports = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  viteFinal: async (config) => {
    config.plugins = [
      ...(config.plugins || []),
      react({ jsxRuntime: 'automatic', jsxImportSource: 'react' }),
      vanillaExtractPlugin(),
    ];
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, '../src'),
    };
    return config;
  },
};
