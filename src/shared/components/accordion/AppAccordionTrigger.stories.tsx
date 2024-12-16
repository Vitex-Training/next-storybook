import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';
import React from 'react';

import {
  AppAccordion,
  AppAccordionContent,
  AppAccordionItem,
  AppAccordionTrigger as AppAccordionTrigger2,
  AppTriggerIconVariant,
} from './AppAccordion';

const AppAccordionTrigger = (args: React.ComponentProps<typeof AppAccordionTrigger2>) => (
  <AppAccordion className='mx-auto w-80' collapsible type='single'>
    <AppAccordionItem value='item-1'>
      <AppAccordionTrigger2 {...args} />
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
  component: AppAccordionTrigger,
  tags: ['autodocs'],
  title: 'Components/Accordion/AccordionTrigger',
} satisfies Meta<typeof AppAccordionTrigger2>;

export default meta;
type Story = StoryObj<typeof AppAccordionTrigger2>;

export const Default: Story = {
  args: {
    children: 'Demo title trigger',
    iconPosition: 'start',
  },
};
