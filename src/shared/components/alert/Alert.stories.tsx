import { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    autoClose: {
      control: 'number',
      default: 5000,
      description: 'Time auto close alert(ms)',
    },
    idx: { action: 'Alert added' },
    type: {
      control: {
        options: ['success', 'error', 'info', 'warning'],
        type: 'select',
      },
      default: 'info',
      description: 'Type of alert',
      onClose: { action: 'Alert closed' },
    },
  },
  component: Alert,
  tags: ['autodocs'],
  title: 'Components/Alert/AlertType',
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    autoClose: 3000,
    idx: 0,
    message: 'This is a success toast!',
    onClose: (id: number): void => {
      id.toString();
    },
    type: 'success',
  },
};

export const Error: Story = {
  args: {
    idx: 1,
    message: 'This is an error toast!',
    onClose: (id: number): void => {
      id.toString();
    },
    type: 'error',
  },
};

export const Warning: Story = {
  args: {
    idx: 2,
    message: 'This is a warning toast!',
    onClose: (id: number): void => {
      id.toString();
    },
    type: 'warning',
  },
};

export const Info: Story = {
  args: {
    idx: 3,
    message: 'This is an info toast!',
    onClose: (id: number): void => {
      id.toString();
    },
    type: 'info',
  },
};

export const Default: Story = {
  args: {
    idx: 4,
    message: 'This is a default toast!',
    onClose: (id: number): void => {
      id.toString();
    },
    type: 'info',
  },
};
