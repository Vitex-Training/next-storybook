import type { Meta, StoryObj } from '@storybook/react';

import { Slash } from 'lucide-react';

import {
  AppBreadcrumb,
  AppBreadcrumbItem,
  AppBreadcrumbLink,
  AppBreadcrumbList,
  AppBreadcrumbPage,
  AppBreadcrumbSeparator,
} from './AppBreadCrumb';

const meta = {
  component: AppBreadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Breadcrumb/BreadcrumbSeparator',
} satisfies Meta<typeof AppBreadcrumb>;

export default meta;
type Story = StoryObj<typeof AppBreadcrumb>;

export const Default: Story = {
  args: {
    children: (
      <AppBreadcrumbList>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href=''>Home</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbPage>Breadcrumb</AppBreadcrumbPage>
        </AppBreadcrumbItem>
      </AppBreadcrumbList>
    ),
  },
};

export const CustomSeparator: Story = {
  args: {
    children: (
      <AppBreadcrumbList>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href=''>Home</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator>
          <Slash />
        </AppBreadcrumbSeparator>
        <AppBreadcrumbItem>
          <AppBreadcrumbPage>Breadcrumb</AppBreadcrumbPage>
        </AppBreadcrumbItem>
      </AppBreadcrumbList>
    ),
  },
};
