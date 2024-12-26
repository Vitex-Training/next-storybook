import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DayPickerMultipleProps } from 'react-day-picker';
import { AppCalendar } from 'src/shared/components/calendar/AppCalendar';

const AppCalendarStoryMultiple = (args: DayPickerMultipleProps) => {
  const [date, setDate] = useState<Date[] | undefined>([new Date()]);
  return <AppCalendar className='rounded-md border' onSelect={setDate} selected={date} {...args} />;
};

const meta = {
  args: { mode: 'multiple' },
  argTypes: {
    max: {
      control: 'number',
    },
    min: {
      control: 'number',
    },
    modifiers: {
      control: 'object',
    },
    modifiersClassNames: {
      control: 'object',
    },
    numberOfMonths: {
      control: 'number',
    },
  },
  component: AppCalendarStoryMultiple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Calendar/CalendarMultiple',
} satisfies Meta<typeof AppCalendarStoryMultiple>;

export default meta;
type Story = StoryObj<typeof AppCalendarStoryMultiple>;

export const MultipleDaysSelected: Story = {};

export const MultipleDaysWithMinMax: Story = {
  args: {
    max: 7,
    min: 3,
  },
};

export const Modifiers: Story = {
  args: {
    modifiers: { special: [new Date(2024, 11, 10)] },
    modifiersClassNames: { special: 'bg-red-500' },
  },
};

export const DisplayMultiMonths: Story = {
  args: {
    numberOfMonths: 2,
  },
};
