import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DateRange, DayPickerRangeProps } from 'react-day-picker';
import { AppCalendar } from 'src/shared/components/calendar/AppCalendar';

const AppCalendarStoryRange = (args: DayPickerRangeProps) => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  return <AppCalendar className='rounded-md border' onSelect={setDate} selected={date} {...args} />;
};

const meta = {
  component: AppCalendarStoryRange,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Calendar/CalendarRange',
} satisfies Meta<typeof AppCalendarStoryRange>;

export default meta;
type Story = StoryObj<typeof AppCalendarStoryRange>;

export const RangeDays: Story = {};
