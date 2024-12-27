import type { Meta, StoryObj } from '@storybook/react';

import { TabsTriggerProps } from '@radix-ui/react-tabs';
import { AppTabs, AppTabsContent, AppTabsList, AppTabsTrigger } from 'src/shared/components/tabs/AppTabs';

const AppTabsTriggerStory = (args: TabsTriggerProps) => (
  <AppTabs defaultValue='tg1'>
    <AppTabsList>
      <AppTabsTrigger value='tg1'>Trigger1</AppTabsTrigger>
      <AppTabsTrigger {...args} />
      <AppTabsTrigger value='tg3'>Trigger3</AppTabsTrigger>
    </AppTabsList>
    <AppTabsContent className='h-20 w-96 rounded-md border px-2 py-1' value='tg1'>
      Content1
    </AppTabsContent>
    <AppTabsContent className='h-20 w-96 rounded-md border px-2 py-1' value='tg2'>
      Content2
    </AppTabsContent>
    <AppTabsContent className='h-20 w-96 rounded-md border px-2 py-1' value='tg3'>
      Content3
    </AppTabsContent>
  </AppTabs>
);

const meta = {
  argTypes: {
    asChild: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
  },
  component: AppTabsTriggerStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tabs/TabsTrigger',
} satisfies Meta<typeof AppTabsTriggerStory>;

export default meta;
type Story = StoryObj<typeof AppTabsTriggerStory>;

export const Default: Story = {
  args: {
    children: 'Trigger2',
    value: 'tg2',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
