import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { AppAccordion, AppAccordionContent, AppAccordionItem, AppAccordionTrigger } from './AppAccordion';

const meta = {
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    type: {
      control: {
        type: 'radio',
      },
      options: ['single', 'multiple'],
    },
  },
  component: AppAccordion,
  tags: ['autodocs'],
  title: 'Components/Accordion/Accordion',
} satisfies Meta<typeof AppAccordion>;

export default meta;
type Story = StoryObj<typeof AppAccordion>;

export const Single: Story = {
  args: {
    className: 'mx-auto w-96',
    collapsible: true,
    type: 'single',
  },
  render: (args) => (
    <AppAccordion {...args}>
      <AppAccordionItem value='item-1'>
        <AppAccordionTrigger>Trigger Demo 1</AppAccordionTrigger>
        <AppAccordionContent>Content Demo 1</AppAccordionContent>
      </AppAccordionItem>
      <AppAccordionItem value='item-2'>
        <AppAccordionTrigger>Trigger Demo 2</AppAccordionTrigger>
        <AppAccordionContent>Content Demo 2</AppAccordionContent>
      </AppAccordionItem>
      <AppAccordionItem value='item-3'>
        <AppAccordionTrigger>Trigger Demo 3</AppAccordionTrigger>
        <AppAccordionContent>Content Demo 3</AppAccordionContent>
      </AppAccordionItem>
    </AppAccordion>
  ),
};
export const Multiple: Story = {
  args: {
    className: 'mx-auto w-96',
    type: 'multiple',
  },
};
