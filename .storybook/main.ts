import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chakra-ui/storybook-addon'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // async viteFinal(config) {
  //   // Set relative base path to support deployment on path like /storybook
  //   config.base = './';
  //   config.optimizeDeps.include = ['react-is', '@base2/pretty-print-object', ...config?.optimizeDeps?.include];
  //   return config;
  // },
  docs: {
    autodocs: true,
  },
};

export default config;
