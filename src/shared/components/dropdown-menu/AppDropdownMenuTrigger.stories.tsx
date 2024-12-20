import type { Meta, StoryObj } from '@storybook/react';

import { Settings, User } from 'lucide-react';

import { AppButton } from '../button/AppButton';
import {
  AppDropdownMenu,
  AppDropdownMenuContent,
  AppDropdownMenuGroup,
  AppDropdownMenuItem,
  AppDropdownMenuLabel,
  AppDropdownMenuSeparator,
  AppDropdownMenuShortcut,
  AppDropdownMenuTrigger,
} from './AppDropdownMenu';

const AppDropdownMenuTriggerStory = (args: React.ComponentProps<typeof AppDropdownMenuTrigger>) => (
  <AppDropdownMenu>
    <AppDropdownMenuTrigger {...args} />
    <AppDropdownMenuContent className='w-56'>
      <AppDropdownMenuLabel>My Account</AppDropdownMenuLabel>
      <AppDropdownMenuSeparator />
      <AppDropdownMenuGroup>
        <AppDropdownMenuItem>
          <User />
          <span>Profile</span>
          <AppDropdownMenuShortcut>⌘P</AppDropdownMenuShortcut>
        </AppDropdownMenuItem>
        <AppDropdownMenuItem>
          <Settings />
          <span>Settings</span>
          <AppDropdownMenuShortcut>⌘S</AppDropdownMenuShortcut>
        </AppDropdownMenuItem>
      </AppDropdownMenuGroup>
    </AppDropdownMenuContent>
  </AppDropdownMenu>
);

const meta = {
  argTypes: {
    asChild: {
      control: 'boolean',
    },
  },
  component: AppDropdownMenuTriggerStory,
  decorators: [
    (Story) => (
      <div className='h-32'>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DropdownMenu/DropdownMenu/DropdownMenuTrigger',
} satisfies Meta<typeof AppDropdownMenuTriggerStory>;

export default meta;

type Story = StoryObj<typeof AppDropdownMenuTriggerStory>;

export const Default: Story = {
  args: {
    asChild: true,
    children: <AppButton variant='outline'>Open</AppButton>,
  },
};
export const WithoutButtonInside: Story = {
  args: {
    asChild: false,
    children: <span>Open dropdown</span>,
  },
};
