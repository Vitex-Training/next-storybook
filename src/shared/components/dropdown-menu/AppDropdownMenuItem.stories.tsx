import type { Meta, StoryObj } from '@storybook/react';

import { Cloud, Settings, User } from 'lucide-react';

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

const AppDropdownMenuItemStory = (args: React.ComponentProps<typeof AppDropdownMenuItem>) => (
  <AppDropdownMenu>
    <AppDropdownMenuTrigger asChild>
      <AppButton variant='outline'>Open</AppButton>
    </AppDropdownMenuTrigger>
    <AppDropdownMenuContent className='w-56'>
      <AppDropdownMenuLabel>My account</AppDropdownMenuLabel>
      <AppDropdownMenuSeparator />
      <AppDropdownMenuGroup>
        <AppDropdownMenuItem {...args} />
      </AppDropdownMenuGroup>
    </AppDropdownMenuContent>
  </AppDropdownMenu>
);

const meta = {
  component: AppDropdownMenuItemStory,
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
  title: 'Components/DropdownMenu/DropdownMenu/DropdownMenuItem',
} satisfies Meta<typeof AppDropdownMenuItemStory>;

export default meta;

type Story = StoryObj<typeof AppDropdownMenuItemStory>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <User />
        <span>Profile</span>
        <AppDropdownMenuShortcut>⌘P</AppDropdownMenuShortcut>
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    children: (
      <>
        <Settings />
        <span>Setting</span>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <Cloud />
        <span>API</span>
      </>
    ),
    disabled: true,
  },
};
