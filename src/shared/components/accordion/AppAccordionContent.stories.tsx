import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import {
  AppAccordion,
  AppAccordionContent as AppAccordionContent2,
  AppAccordionItem,
  AppAccordionTrigger,
} from './AppAccordion';

const AppAccordionContent = (args: React.ComponentProps<typeof AppAccordionContent2>) => (
  <AppAccordion className='mx-auto w-80' collapsible type='single'>
    <AppAccordionItem value='item-1'>
      <AppAccordionTrigger>Trigger title</AppAccordionTrigger>
      <AppAccordionContent2 {...args} />
    </AppAccordionItem>
  </AppAccordion>
);

const meta = {
  component: AppAccordionContent,
  tags: ['autodocs'],
  title: 'Components/Accordion/AccordionContent',
} satisfies Meta<typeof AppAccordionContent2>;

export default meta;
type Story = StoryObj<typeof AppAccordionContent2>;

export const Default: Story = {
  args: {
    children: 'Demo content description',
  },
};
