import { Meta, StoryFn } from '@storybook/react';
import { useEffect } from 'react';
import { AlertProvider } from 'src/shared/context/AlertContext';
import { useAlert } from 'src/shared/hooks/useAlert';

import { AlertContainer, AlertContainerProps } from './AlertContainer';

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
    position: {
      control: {
        options: ['top-left', 'top-center', 'top-right', 'center', 'bottom-left', 'bottom-center', 'bottom-right'],
        type: 'select',
      },
      default: 'top-center',
      description: 'Location of alert appearance. Default is top-center',
    },
  },
  component: AlertContainer,
  decorators: [
    (Story) => {
      return (
        <AlertProvider>
          <Story />
        </AlertProvider>
      );
    },
  ],
  tags: ['autodocs'],
  title: 'Components/Alert/AlertContainer',
} satisfies Meta<typeof AlertContainer>;

export default meta;

const Template: StoryFn<typeof AlertContainer> = (args: AlertContainerProps) => {
  const { addAlert } = useAlert();

  useEffect(() => {
    addAlert('This is a success message!', { type: 'success' });
    addAlert('This is a error message!', { type: 'error' });
    addAlert('This is a warning message!', { type: 'warning' });
    addAlert('This is a info message!', { type: 'info' });
  }, [addAlert]);

  return <AlertContainer {...args} />;
};

export const Default = Template.bind({});
