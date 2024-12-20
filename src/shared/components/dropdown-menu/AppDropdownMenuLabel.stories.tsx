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

const AppDropdownMenuLabelStory = (args: React.ComponentProps<typeof AppDropdownMenuLabel>) => (
  <AppDropdownMenu>
    <AppDropdownMenuTrigger asChild>
      <AppButton variant='outline'>Open</AppButton>
    </AppDropdownMenuTrigger>
    <AppDropdownMenuContent className='w-56'>
      <AppDropdownMenuLabel {...args} />
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
  component: AppDropdownMenuLabelStory,
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
  title: 'Components/DropdownMenu/DropdownMenu/DropdownMenuLabel',
} satisfies Meta<typeof AppDropdownMenuLabelStory>;

export default meta;

type Story = StoryObj<typeof AppDropdownMenuLabelStory>;

export const Default: Story = {
  args: {
    children: 'My account',
    className: 'font-bold',
    inset: false,
  },
};
