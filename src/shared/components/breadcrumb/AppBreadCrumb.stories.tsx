import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';
import {
  AppBreadcrumb,
  AppBreadcrumbEllipsis,
  AppBreadcrumbItem,
  AppBreadcrumbLink,
  AppBreadcrumbList,
  AppBreadcrumbPage,
  AppBreadcrumbSeparator,
} from './AppBreadCrumb';

const meta = {
  args: { onClick: fn() },
  component: AppBreadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Breadcrumb/Breadcrumb',
} satisfies Meta<typeof AppBreadcrumb>;

export default meta;
type Story = StoryObj<typeof AppBreadcrumb>;

export const Default: Story = {
  argTypes: {
    defaultValue: {
      
    }
  }
};
