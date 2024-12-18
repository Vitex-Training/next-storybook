import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';
import { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import React from 'react';

import {
  AppInputOTP,
  AppInputOTPCountDown,
  AppInputOTPGroup,
  AppInputOTPSeparator,
  AppInputOTPSlot,
} from './AppInputOTP';

const regexMap = { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS };

const meta = {
  args: { maxLength: 6, onComplete: fn() },
  argTypes: {
    pattern: {
      control: {
        type: 'radio',
      },
      mapping: regexMap,
      options: Object.keys(regexMap),
    },
  },
  component: AppInputOTP,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/InputOTP',
} satisfies Meta<typeof AppInputOTP>;

export default meta;
type Story = StoryObj<typeof AppInputOTP>;

export const Default: Story = {
  args: {
    children: (
      <AppInputOTPGroup>
        <AppInputOTPSlot index={0} />
        <AppInputOTPSlot index={1} />
        <AppInputOTPSlot index={2} />
        <AppInputOTPSlot index={3} />
        <AppInputOTPSlot index={4} />
        <AppInputOTPSlot index={5} />
      </AppInputOTPGroup>
    ),
  },
  render: (args) => <AppInputOTP {...args} />,
};
export const OnlyDigits: Story = {
  args: {
    ...Default.args,
    pattern: REGEXP_ONLY_DIGITS,
    value: '987123',
  },
};

export const OnlyChars: Story = {
  args: {
    ...Default.args,
    pattern: REGEXP_ONLY_CHARS,
    value: 'Ahcase',
  },
};

export const CharsAndDigits: Story = {
  args: {
    ...Default.args,
    pattern: REGEXP_ONLY_DIGITS_AND_CHARS,
    value: '6n3K5h',
  },
};

export const WithSeparator: Story = {
  args: {
    children: (
      <>
        <AppInputOTPGroup>
          <AppInputOTPSlot index={0} />
          <AppInputOTPSlot index={1} />
          <AppInputOTPSlot index={2} />
        </AppInputOTPGroup>
        <AppInputOTPSeparator />
        <AppInputOTPGroup>
          <AppInputOTPSlot index={3} />
          <AppInputOTPSlot index={4} />
          <AppInputOTPSlot index={5} />
        </AppInputOTPGroup>
      </>
    ),
    pattern: REGEXP_ONLY_DIGITS,
  },
  render: (args) => <AppInputOTP {...args} />,
};
export const Spacing: Story = {
  args: {
    children: (
      <>
        <AppInputOTPGroup>
          <AppInputOTPSlot index={0} />
          <AppInputOTPSlot index={1} />
        </AppInputOTPGroup>
        <AppInputOTPGroup>
          <AppInputOTPSlot index={2} />
          <AppInputOTPSlot index={3} />
        </AppInputOTPGroup>
        <AppInputOTPGroup>
          <AppInputOTPSlot index={4} />
          <AppInputOTPSlot index={5} />
        </AppInputOTPGroup>
      </>
    ),
  },
  render: (args) => <AppInputOTP {...args} />,
};
export const WithCountdown: Story = {
  render: () => {
    const [disabled, setDisabled] = React.useState(false);
    const handleDisabled = () => setDisabled(true);
    return (
      <AppInputOTP disabled={disabled} maxLength={6}>
        <AppInputOTPGroup className='gap-2'>
          <AppInputOTPSlot index={0} />
          <AppInputOTPSlot index={1} />
          <AppInputOTPSlot index={2} />
          <AppInputOTPSlot index={3} />
          <AppInputOTPSlot index={4} />
          <AppInputOTPSlot index={5} />
        </AppInputOTPGroup>
        <AppInputOTPCountDown onTimeUp={handleDisabled} time={10} />
      </AppInputOTP>
    );
  },
};
