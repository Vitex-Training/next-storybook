import type { Meta, StoryObj } from '@storybook/react';

import { TabsListProps } from '@radix-ui/react-tabs';
import { AppTabs, AppTabsContent, AppTabsList, AppTabsTrigger } from 'src/shared/components/tabs/AppTabs';

const AppTabsListStory = (args: TabsListProps) => (
  <AppTabs defaultValue='tg1'>
    <AppTabsList {...args} />
    <AppTabsContent className='h-20 w-96 rounded-md border px-2 py-1' value='tg1'>
      Content1
    </AppTabsContent>
    <AppTabsContent className='h-20 w-96 rounded-md border px-2 py-1' value='tg2'>
      Content2
    </AppTabsContent>
  </AppTabs>
);

const meta = {
  argTypes: {
    asChild: {
      control: 'boolean',
    },
    loop: {
      control: 'boolean',
      description: 'When true, keyboard navigation will loop from last tab to first, and vice versa.',
    },
  },
  component: AppTabsListStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tabs/TabsList',
} satisfies Meta<typeof AppTabsListStory>;

export default meta;
type Story = StoryObj<typeof AppTabsListStory>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AppTabsTrigger value='tg1'>Trigger1</AppTabsTrigger>
        <AppTabsTrigger value='tg2'>Trigger2</AppTabsTrigger>
      </>
    ),
    loop: true,
  },
};

export const DisabledLoop: Story = {
  args: {
    ...Default.args,
    loop: false,
  },
};
