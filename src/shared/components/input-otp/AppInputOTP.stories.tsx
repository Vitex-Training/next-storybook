import type { Meta, StoryObj } from '@storybook/react';

import { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

import { AppInputOTP, AppInputOTPGroup, AppInputOTPSlot } from './AppInputOTP';

const regexMap = { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS };

const meta = {
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
  title: 'Components/InputOTP/InputOTP',
} satisfies Meta<typeof AppInputOTP>;

export default meta;
type Story = StoryObj<typeof AppInputOTP>;

export const Default: Story = {
  args: {
    maxLength: 6,
    pattern: REGEXP_ONLY_DIGITS,
  },
  render: (args) => (
    <AppInputOTP {...args}>
      <AppInputOTPGroup>
        <AppInputOTPSlot index={0} />
        <AppInputOTPSlot index={1} />
        <AppInputOTPSlot index={2} />
        <AppInputOTPSlot index={3} />
        <AppInputOTPSlot index={4} />
        <AppInputOTPSlot index={5} />
      </AppInputOTPGroup>
    </AppInputOTP>
  ),
};
