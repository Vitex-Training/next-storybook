import type { Meta, StoryObj } from '@storybook/react';

import {
  AppSelect,
  AppSelectContent,
  AppSelectGroup,
  AppSelectItem,
  AppSelectLabel,
  AppSelectTrigger,
  AppSelectValue,
} from './AppSelect';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  component: AppSelect,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof AppSelect>;

export default meta;
type Story = StoryObj<typeof AppSelect>;

const SidebarTemplate: Story = {
  render: (args) => (
    <AppSelect {...args}>
      <AppSelectTrigger className='w-[180px]'>
        <AppSelectValue placeholder='AppSelect a fruit' />
      </AppSelectTrigger>
      <AppSelectContent>
        <AppSelectGroup>
          <AppSelectLabel>Fruits</AppSelectLabel>
          <AppSelectItem value='apple'>Apple</AppSelectItem>
          <AppSelectItem value='banana'>Banana</AppSelectItem>
          <AppSelectItem value='blueberry'>Blueberry</AppSelectItem>
          <AppSelectItem value='grapes'>Grapes</AppSelectItem>
          <AppSelectItem value='pineapple'>Pineapple</AppSelectItem>
        </AppSelectGroup>
        <AppSelectGroup>
          <AppSelectLabel>Fruits</AppSelectLabel>
          <AppSelectItem value='apple'>Apple</AppSelectItem>
          <AppSelectItem value='banana'>Banana</AppSelectItem>
          <AppSelectItem value='blueberry'>Blueberry</AppSelectItem>
          <AppSelectItem value='grapes'>Grapes</AppSelectItem>
          <AppSelectItem value='pineapple'>Pineapple</AppSelectItem>
        </AppSelectGroup>
      </AppSelectContent>
    </AppSelect>
  ),
};

export const Default: Story = {
  ...SidebarTemplate,
};
