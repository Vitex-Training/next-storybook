import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';
import { AppSkeleton, SkeletonVariant } from './AppSkeleton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    shape: {
      control: {
        type: 'radio',
      },
      options: ['circle', 'rectangle'] satisfies SkeletonVariant['shape'][],
    },
  },
  component: AppSkeleton,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Components/Skeleton',
} satisfies Meta<typeof AppSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    shape: 'rectangle',
  },
};

export const Circle: Story = {
  args: {
    shape: 'circle',
  },
};
