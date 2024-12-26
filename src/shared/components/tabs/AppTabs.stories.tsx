import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';
import React from 'react';
import {
  AppTabs,
  AppTabsContent,
  AppTabsList,
  AppTabsTrigger,
  CustomTabsProps,
} from 'src/shared/components/tabs/AppTabs';

const meta = {
  args: { onValueChange: fn() },
  argTypes: {
    activationMode: {
      control: 'radio',
      options: ['automatic', 'manual'],
    },
    asChild: {
      control: 'boolean',
    },
    defaultValue: {
      description: 'string',
    },
    dir: {
      control: 'radio',
      options: ['rtl', 'ltr', 'center'] satisfies CustomTabsProps['dir'][],
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    value: {
      description: 'string',
    },
  },
  component: AppTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof AppTabs>;

export default meta;
type Story = StoryObj<typeof AppTabs>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AppTabsList>
          <AppTabsTrigger value='tg1'>Trigger1</AppTabsTrigger>
          <AppTabsTrigger value='tg2'>Trigger2</AppTabsTrigger>
        </AppTabsList>
        <AppTabsContent className='h-20 w-96 rounded-md border px-2 py-1' value='tg1'>
          Content1
        </AppTabsContent>
        <AppTabsContent className='h-20 w-96 rounded-md border px-2 py-1' value='tg2'>
          Content2
        </AppTabsContent>
      </>
    ),
    defaultValue: 'tg1',
  },
};

export const TriggerDirection: Story = {
  args: {
    ...Default.args,
    dir: 'rtl' as CustomTabsProps['dir'],
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: 'vertical',
  },
};

export const Automatic: Story = {
  args: {
    ...Default.args,
    activationMode: 'automatic',
  },
  render: (args) => {
    const [activeTab, setActiveTab] = React.useState('tg1');
    React.useEffect(() => {
      const interval = setInterval(() =>{
        setActiveTab((prev) => (prev === 'tg1' ? 'tg2' : 'tg1'));
      }, 2000);
      return () => clearInterval(interval);
    }, []);
    return (
      <AppTabs {...args} value={activeTab} />
    )
  },
};
