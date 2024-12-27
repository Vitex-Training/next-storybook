import type { Meta, StoryObj } from '@storybook/react';

import { TabsContentProps } from '@radix-ui/react-tabs';
import { AppTabs, AppTabsContent, AppTabsList, AppTabsTrigger } from 'src/shared/components/tabs/AppTabs';

const AppTabsContentStory = (args: TabsContentProps) => (
  <AppTabs defaultValue='tg1'>
    <AppTabsList>
      <AppTabsTrigger value='tg1'>Trigger1</AppTabsTrigger>
      <AppTabsTrigger value='tg2'>Trigger2</AppTabsTrigger>
      <AppTabsTrigger value='tg3'>Trigger3</AppTabsTrigger>
    </AppTabsList>
    <AppTabsContent className='h-20 w-96 rounded-md border px-2 py-1' value='tg1'>
      Content1
    </AppTabsContent>
    <AppTabsContent className='h-20 w-96 rounded-md border px-2 py-1' value='tg2'>
      Content2
    </AppTabsContent>
    <AppTabsContent className='h-20 w-96 rounded-md border px-2 py-1' {...args} />
  </AppTabs>
);

const meta = {
  argTypes: {
    asChild: {
      control: 'boolean',
    },
    forceMount: {
      control: 'boolean',
      description:
        'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.',
    },
    value: {
      control: 'text',
    },
  },
  component: AppTabsContentStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tabs/TabsContent',
} satisfies Meta<typeof AppTabsContentStory>;

export default meta;
type Story = StoryObj<typeof AppTabsContentStory>;

export const Default: Story = {
  args: {
    children: 'Content3',
    value: 'tg3',
  },
};

export const ForceMount: Story = {
  args: {
    ...Default.args,
    forceMount: true,
  },
};
