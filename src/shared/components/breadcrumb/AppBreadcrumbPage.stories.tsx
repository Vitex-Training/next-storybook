import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import {
  AppBreadcrumb,
  AppBreadcrumbItem,
  AppBreadcrumbLink,
  AppBreadcrumbList,
  AppBreadcrumbPage,
  AppBreadcrumbSeparator,
} from './AppBreadCrumb';

const AppBreadcrumbPageStory = (args: React.ComponentProps<typeof AppBreadcrumbPage>) => (
  <AppBreadcrumb>
    <AppBreadcrumbList>
      <AppBreadcrumbItem>
        <AppBreadcrumbLink href=''>Home</AppBreadcrumbLink>
      </AppBreadcrumbItem>
      <AppBreadcrumbSeparator />
      <AppBreadcrumbItem>
        <AppBreadcrumbPage {...args} />
      </AppBreadcrumbItem>
    </AppBreadcrumbList>
  </AppBreadcrumb>
);

const meta = {
  component: AppBreadcrumbPageStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Breadcrumb/BreadcrumbPage',
} satisfies Meta<typeof AppBreadcrumbPageStory>;

export default meta;
type Story = StoryObj<typeof AppBreadcrumbPageStory>;

export const Default: Story = {
  args: {
    children: 'Breadcrumb',
  },
};
