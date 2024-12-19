import type { Meta, StoryObj } from '@storybook/react';

import {
  AppDropdownMenu,
  AppDropdownMenuContent,
  AppDropdownMenuItem,
  AppDropdownMenuTrigger,
} from 'src/shared/components/dropdown-menu/AppDropdownMenu';

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
  args: {
    children: (
      <AppBreadcrumbList>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href=''>Home</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href=''>Component</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbPage>Breadcrumb</AppBreadcrumbPage>
        </AppBreadcrumbItem>
      </AppBreadcrumbList>
    ),
  },
};

export const Ellipsis: Story = {
  args: {
    children: (
      <AppBreadcrumbList>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href=''>Home</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbEllipsis />
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href=''>Component</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbPage>Breadcrumb</AppBreadcrumbPage>
        </AppBreadcrumbItem>
      </AppBreadcrumbList>
    ),
  },
};

export const WithDropdownMenu: Story = {
  args: {
    children: (
      <AppBreadcrumbList>
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href=''>Home</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppDropdownMenu>
            <AppDropdownMenuTrigger>
              <AppBreadcrumbEllipsis />
              <span className='sr-only'>Toggle menu</span>
            </AppDropdownMenuTrigger>
            <AppDropdownMenuContent align='center'>
              <AppDropdownMenuItem>Documentation</AppDropdownMenuItem>
              <AppDropdownMenuItem>Themes</AppDropdownMenuItem>
              <AppDropdownMenuItem>GitHub</AppDropdownMenuItem>
            </AppDropdownMenuContent>
          </AppDropdownMenu>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbLink href=''>Component</AppBreadcrumbLink>
        </AppBreadcrumbItem>
        <AppBreadcrumbSeparator />
        <AppBreadcrumbItem>
          <AppBreadcrumbPage>Breadcrumb</AppBreadcrumbPage>
        </AppBreadcrumbItem>
      </AppBreadcrumbList>
    ),
  },
};
