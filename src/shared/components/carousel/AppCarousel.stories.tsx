import type { Meta, StoryObj } from '@storybook/react';

import {
  AppCarousel,
  AppCarouselContent,
  AppCarouselItem,
  AppCarouselNext,
  AppCarouselPrevious,
  AppCarouselVariant,
} from './AppCarousel';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    orientation: {
      control: {
        type: 'radio',
      },
      options: ['horizontal', 'vertical'] satisfies AppCarouselVariant['orientation'][],
    },
  },
  component: AppCarousel,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Components/Carousel',
} satisfies Meta<typeof AppCarousel>;

export default meta;
type Story = StoryObj<typeof AppCarousel>;

const SidebarTemplate: Story = {
  render: (args) => (
    <AppCarousel {...args}>
      <AppCarouselPrevious>Prev</AppCarouselPrevious>
      <AppCarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <AppCarouselItem key={index}>Item{index}</AppCarouselItem>
        ))}
      </AppCarouselContent>
      <AppCarouselNext>Next</AppCarouselNext>
    </AppCarousel>
  ),
};

export const Default: Story = {
  ...SidebarTemplate,
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  ...SidebarTemplate,
  args: {
    orientation: 'vertical',
  },
};
