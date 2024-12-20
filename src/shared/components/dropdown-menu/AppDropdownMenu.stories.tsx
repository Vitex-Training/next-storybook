import type { Meta, StoryObj } from '@storybook/react';

import { Cloud, LogOut, Mail, MessageSquare, PlusCircle, Settings, User, UserPlus } from 'lucide-react';
import { useState } from 'react';

import { AppButton } from '../button/AppButton';
import {
  AppDropdownMenu,
  AppDropdownMenuCheckboxItem,
  AppDropdownMenuContent,
  AppDropdownMenuGroup,
  AppDropdownMenuItem,
  AppDropdownMenuLabel,
  AppDropdownMenuPortal,
  AppDropdownMenuRadioGroup,
  AppDropdownMenuRadioItem,
  AppDropdownMenuSeparator,
  AppDropdownMenuShortcut,
  AppDropdownMenuSub,
  AppDropdownMenuSubContent,
  AppDropdownMenuSubTrigger,
  AppDropdownMenuTrigger,
} from './AppDropdownMenu';

const meta = {
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      type: 'boolean',
    },
  },
  component: AppDropdownMenu,
  decorators: [
    (Story) => (
      <div className='h-52'>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DropdownMenu/DropdownMenu/DropdownMenu',
} satisfies Meta<typeof AppDropdownMenu>;

export default meta;

type Story = StoryObj<typeof AppDropdownMenu>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AppDropdownMenuTrigger asChild>
          <AppButton variant='outline'>Open</AppButton>
        </AppDropdownMenuTrigger>
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
          <AppDropdownMenuSeparator />
          <AppDropdownMenuGroup>
            <AppDropdownMenuItem disabled>
              <Cloud />
              <span>API</span>
            </AppDropdownMenuItem>
            <AppDropdownMenuItem>
              <LogOut />
              <span>Log out</span>
            </AppDropdownMenuItem>
          </AppDropdownMenuGroup>
        </AppDropdownMenuContent>
      </>
    ),
    defaultOpen: false,
  },
};

export const WithSubmenu: Story = {
  args: {
    children: (
      <>
        <AppDropdownMenuTrigger asChild>
          <AppButton variant='outline'>Open</AppButton>
        </AppDropdownMenuTrigger>
        <AppDropdownMenuContent className='w-56'>
          <AppDropdownMenuGroup>
            <AppDropdownMenuItem>
              <User />
              <span>Profile</span>
              <AppDropdownMenuShortcut>⌘P</AppDropdownMenuShortcut>
            </AppDropdownMenuItem>
            <AppDropdownMenuSub>
              <AppDropdownMenuSubTrigger>
                <UserPlus />
                <span>Invite users</span>
              </AppDropdownMenuSubTrigger>
              <AppDropdownMenuPortal>
                <AppDropdownMenuSubContent>
                  <AppDropdownMenuItem>
                    <Mail />
                    <span>Email</span>
                  </AppDropdownMenuItem>
                  <AppDropdownMenuItem>
                    <MessageSquare />
                    <span>Message</span>
                  </AppDropdownMenuItem>
                  <AppDropdownMenuSeparator />
                  <AppDropdownMenuItem>
                    <PlusCircle />
                    <a href='/counter'>To counter</a>
                  </AppDropdownMenuItem>
                </AppDropdownMenuSubContent>
              </AppDropdownMenuPortal>
            </AppDropdownMenuSub>
          </AppDropdownMenuGroup>
        </AppDropdownMenuContent>
      </>
    ),
  },
};

export const UseRadioGroup: Story = {
  render: () => {
    const [position, setPosition] = useState('top');
    const handleSelect = (event: Event) => event.preventDefault();
    return (
      <AppDropdownMenu>
        <AppDropdownMenuTrigger asChild>
          <AppButton variant='outline'>Change Position</AppButton>
        </AppDropdownMenuTrigger>
        <AppDropdownMenuContent className='w-56'>
          <AppDropdownMenuLabel>Panel Position</AppDropdownMenuLabel>
          <AppDropdownMenuSeparator />
          <AppDropdownMenuRadioGroup onValueChange={setPosition} value={position}>
            <AppDropdownMenuRadioItem onSelect={handleSelect} value='top'>
              Top
            </AppDropdownMenuRadioItem>
            <AppDropdownMenuRadioItem onSelect={handleSelect} value='bottom'>
              Bottom
            </AppDropdownMenuRadioItem>
            <AppDropdownMenuRadioItem onSelect={handleSelect} value='right'>
              Right
            </AppDropdownMenuRadioItem>
            <AppDropdownMenuRadioItem onSelect={handleSelect} value='left'>
              Left
            </AppDropdownMenuRadioItem>
          </AppDropdownMenuRadioGroup>
        </AppDropdownMenuContent>
      </AppDropdownMenu>
    );
  },
};

interface CheckItems {
  autoUpdate: boolean;
  darkMode: boolean;
  getNotifications: boolean;
}

export const UseCheckbox: Story = {
  render: () => {
    const [checkedValues, setCheckedValues] = useState<CheckItems>({
      autoUpdate: false,
      darkMode: false,
      getNotifications: true,
    });
    const handleChange = (key: keyof CheckItems) => {
      setCheckedValues((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    };
    const handleSelect = (event: Event) => event.preventDefault();
    return (
      <AppDropdownMenu>
        <AppDropdownMenuTrigger asChild>
          <AppButton variant='outline'>Settings</AppButton>
        </AppDropdownMenuTrigger>
        <AppDropdownMenuContent className='w-56' onClick={(e) => e.stopPropagation()}>
          <AppDropdownMenuLabel>Your settings</AppDropdownMenuLabel>
          <AppDropdownMenuSeparator />
          <AppDropdownMenuCheckboxItem
            checked={checkedValues.getNotifications}
            onCheckedChange={() => handleChange('getNotifications')}
            onSelect={handleSelect}>
            Get notifications
          </AppDropdownMenuCheckboxItem>
          <AppDropdownMenuCheckboxItem
            checked={checkedValues.darkMode}
            onCheckedChange={() => handleChange('darkMode')}
            onSelect={handleSelect}>
            Dark mode
          </AppDropdownMenuCheckboxItem>
          <AppDropdownMenuCheckboxItem
            checked={checkedValues.autoUpdate}
            onCheckedChange={() => handleChange('autoUpdate')}
            onSelect={handleSelect}>
            Autoupdate
          </AppDropdownMenuCheckboxItem>
        </AppDropdownMenuContent>
      </AppDropdownMenu>
    );
  },
};
