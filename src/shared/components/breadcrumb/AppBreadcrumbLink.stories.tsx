import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';
import React from 'react';

import {
  AppBreadcrumb,
  AppBreadcrumbItem,
  AppBreadcrumbLink,
  AppBreadcrumbList,
  AppBreadcrumbPage,
  AppBreadcrumbSeparator,
} from './AppBreadCrumb';

const AppBreadcrumbLinkStory = (args: React.ComponentProps<typeof AppBreadcrumbLink>) => (
  <AppBreadcrumb>
    <AppBreadcrumbList>
      <AppBreadcrumbItem>
        <AppBreadcrumbLink href=''>Home</AppBreadcrumbLink>
      </AppBreadcrumbItem>
      <AppBreadcrumbSeparator />
      <AppBreadcrumbItem>
        <AppBreadcrumbLink {...args} />
      </AppBreadcrumbItem>
      <AppBreadcrumbSeparator />
      <AppBreadcrumbItem>
        <AppBreadcrumbPage>Index</AppBreadcrumbPage>
      </AppBreadcrumbItem>
    </AppBreadcrumbList>
  </AppBreadcrumb>
);

const meta = {
  args: { onClick: fn() },
  component: AppBreadcrumbLinkStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Breadcrumb/BreadcrumbLink',
} satisfies Meta<typeof AppBreadcrumbLinkStory>;

export default meta;
type Story = StoryObj<typeof AppBreadcrumbLinkStory>;

export const Default: Story = {
  args: {
    children: 'Breadcrumb',
    href: '/somepage',
  },
};
