import type { Meta, StoryObj } from '@storybook/react';

import Layout from './Layout';

const meta = {
  title: 'Component/Layout',
  component: Layout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    children: 'Sample layout',
  },
};
