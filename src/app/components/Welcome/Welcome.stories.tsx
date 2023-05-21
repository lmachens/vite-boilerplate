import type { Meta, StoryObj } from '@storybook/react';

import Welcome from './Welcome';

const meta = {
  title: 'Component/Welcome',
  component: Welcome,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Welcome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
