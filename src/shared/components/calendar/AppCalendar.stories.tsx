import { Meta, StoryObj } from '@storybook/react';
import { vi } from 'date-fns/locale';
import React, { useState } from 'react';
import { DateRange, DayPickerMultipleProps, DayPickerRangeProps, DayPickerSingleProps } from 'react-day-picker';
import { AppCalendar } from 'src/shared/components/calendar/AppCalendar';

const AppCalendarStorySingle = (args: DayPickerSingleProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return <AppCalendar onSelect={setDate} selected={date} {...args} />;
};
const AppCalendarStoryMultiple = (args: DayPickerMultipleProps) => {
  const [date, setDate] = useState<Date[] | undefined>([new Date()]);
  return <AppCalendar onSelect={setDate} selected={date} {...args} />;
};
const AppCalendarStoryRange = (args: DayPickerRangeProps) => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  return <AppCalendar onSelect={setDate} selected={date} {...args} />;
};

const meta = {
  component: AppCalendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Calendar',
} satisfies Meta<typeof AppCalendar>;

export default meta;
type Story = StoryObj<typeof AppCalendar>;

export const Default: Story = {
  render: () => <AppCalendarStorySingle mode='single' />,
};

export const DisabledDayOutsideMonth: Story = {
  render: () => <AppCalendarStorySingle mode='single' showOutsideDays={false} />,
};

export const WithFooter: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <AppCalendar
        footer={date ? `Selected: ${date.toLocaleDateString()}` : 'Pick a day.'}
        mode='single'
        onSelect={setDate}
        selected={date}
        showOutsideDays={false}
      />
    );
  },
};

export const DisabledNavigation: Story = {
  render: () => <AppCalendarStorySingle mode='single' />,
};

export const DisabledDays: Story = {
  render: () => (
    <AppCalendarStorySingle disabled={{ after: new Date(2024, 11, 5), before: new Date(2024, 11, 18) }} mode='single' />
  ),
};

export const DisabledWeekend: Story = {
  render: () => <AppCalendarStorySingle disabled={{ dayOfWeek: [0, 6] }} mode='single' />,
};

export const CustomLanguage: Story = {
  render: () => <AppCalendarStorySingle locale={vi} mode='single' />,
};

export const SetStartDay: Story = {
  render: () => <AppCalendarStorySingle mode='single' weekStartsOn={1} />,
};

export const ShowRangeDate: Story = {
  render: () => (
    <AppCalendarStorySingle
      fromDate={new Date(2024, 1, 4)}
      mode='single'
      toDate={new Date(2024, 11, 29)}
      weekStartsOn={1}
    />
  ),
};

export const LayoutDropdown: Story = {
  render: () => (
    <AppCalendarStorySingle
      captionLayout='dropdown'
      classNames={{
        caption_dropdowns: 'flex justify-center',
        caption_label: 'hidden',
        dropdown_month: 'text-sm',
        dropdown_year: 'text-sm',
      }}
      fromMonth={new Date(2000, 1)}
      mode='single'
      toMonth={new Date(2099, 6)}
      weekStartsOn={1}
    />
  ),
};

export const MultipleDaysSelected: Story = {
  render: () => <AppCalendarStoryMultiple mode='multiple' />,
};

export const MultipleDaysWithMinMax: Story = {
  render: () => <AppCalendarStoryMultiple max={7} min={3} mode='multiple' />,
};

export const Modifiers: Story = {
  render: () => (
    <AppCalendarStoryMultiple
      mode='multiple'
      modifiers={{ special: [new Date(2024, 11, 10)] }}
      modifiersClassNames={{ special: 'bg-red-500' }}
    />
  ),
};

export const DisplayMultiMonths: Story = {
  render: () => <AppCalendarStoryMultiple mode='multiple' numberOfMonths={2} />,
};

export const RangeDays: Story = {
  render: () => <AppCalendarStoryRange mode='range' />,
};
