import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { AppSidebar, AppSidebarClose, AppSidebarProvider, AppSidebarTrigger, AppSidebarVariant } from './AppSidebar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    side: {
      control: {
        type: 'radio',
      },
      options: ['left', 'right'] satisfies AppSidebarVariant['side'][],
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['sidebar', 'floating'] satisfies AppSidebarVariant['variant'][],
    },
  },
  component: AppSidebar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Components/Sidebar',
} satisfies Meta<typeof AppSidebar>;

export default meta;
type Story = StoryObj<typeof AppSidebar>;

const SidebarTemplate: Story = {
  render: (args) => (
    <AppSidebarProvider>
      <AppSidebar {...args}>
        <h1>Sidebar</h1>
        <AppSidebarClose>Close sidebar</AppSidebarClose>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quaerat neque. Accusantium earum at vero,
          nulla incidunt ducimus odit sunt reiciendis, necessitatibus repudiandae inventore minus ratione, fugit
          possimus tenetur voluptate.
        </p>
      </AppSidebar>
      <div>
        <AppSidebarTrigger>Open sidebar</AppSidebarTrigger>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quaerat neque. Accusantium earum at vero,
          nulla incidunt ducimus odit sunt reiciendis, necessitatibus repudiandae inventore minus ratione, fugit
          possimus tenetur voluptate.
        </p>
      </div>
    </AppSidebarProvider>
  ),
};

export const Default: Story = {
  ...SidebarTemplate,
  args: {
    side: 'left',
    variant: 'sidebar',
  },
};
