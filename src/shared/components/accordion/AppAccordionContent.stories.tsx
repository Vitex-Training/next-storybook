import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { AppAccordion, AppAccordionContent, AppAccordionItem, AppAccordionTrigger } from './AppAccordion';

const DemoContent = (args: React.ComponentProps<typeof AppAccordionContent>) => (
  <AppAccordion className='mx-auto w-80' collapsible type='single'>
    <AppAccordionItem value='item-1'>
      <AppAccordionTrigger>Trigger title</AppAccordionTrigger>
      <AppAccordionContent {...args} />
    </AppAccordionItem>
  </AppAccordion>
);

const meta = {
  // argTypes: {
  //   iconPosition: {
  //     control: {
  //       type: 'radio',
  //     },
  //     options: ['start', 'end'] satisfies AppTriggerIconVariant['iconPosition'][],
  //   },
  // },
  component: DemoContent,
  tags: ['autodocs'],
  title: 'Components/Accordion/AccordionContent',
} satisfies Meta<typeof DemoContent>;

export default meta;
type Story = StoryObj<typeof AppAccordionContent>;

export const Default: Story = {
  args: {
    children: 'Demo content description',
  },
};
