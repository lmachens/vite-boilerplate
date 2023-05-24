import { Preview } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import '../src/app/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const preview: Preview = {
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
};

export default preview;
