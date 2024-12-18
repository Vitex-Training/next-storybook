import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { AppAccordion, AppAccordionContent, AppAccordionItem, AppAccordionTrigger } from './AppAccordion';

const AppAccordionContentStory = (args: React.ComponentProps<typeof AppAccordionContent>) => (
  <AppAccordion className='mx-auto w-80' collapsible type='single'>
    <AppAccordionItem value='item-1'>
      <AppAccordionTrigger>Trigger title</AppAccordionTrigger>
      <AppAccordionContent {...args} />
    </AppAccordionItem>
  </AppAccordion>
);

const meta = {
  component: AppAccordionContentStory,
  tags: ['autodocs'],
  title: 'Components/Accordion/AccordionContent',
} satisfies Meta<typeof AppAccordionContent>;

export default meta;
type Story = StoryObj<typeof AppAccordionContent>;

export const Default: Story = {
  args: {
    children: 'Demo content description',
  },
};
