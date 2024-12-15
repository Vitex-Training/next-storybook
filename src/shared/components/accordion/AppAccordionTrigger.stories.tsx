import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';
import React from 'react';

import {
  AppAccordion,
  AppAccordionContent,
  AppAccordionItem,
  AppAccordionTrigger,
  AppTriggerIconVariant,
} from './AppAccordion';

const DemoTrigger = (args: React.ComponentProps<typeof AppAccordionTrigger>) => (
  <AppAccordion className='mx-auto w-80' collapsible type='single'>
    <AppAccordionItem value='item-1'>
      <AppAccordionTrigger {...args} />
      <AppAccordionContent>Content Demo 1</AppAccordionContent>
    </AppAccordionItem>
  </AppAccordion>
);

const meta = {
  args: { iconPosition: 'end', onClick: fn() },
  argTypes: {
    iconPosition: {
      control: {
        type: 'radio',
      },
      options: ['start', 'end'] satisfies AppTriggerIconVariant['iconPosition'][],
    },
  },
  component: DemoTrigger,
  tags: ['autodocs'],
  title: 'Components/Accordion/AccordionTrigger',
} satisfies Meta<typeof DemoTrigger>;

export default meta;
type Story = StoryObj<typeof AppAccordionTrigger>;

export const Default: Story = {
  args: {
    children: 'Demo title trigger',
    iconPosition: 'start',
  },
};
