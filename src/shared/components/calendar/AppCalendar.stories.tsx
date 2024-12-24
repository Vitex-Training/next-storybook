import { Meta, StoryObj } from '@storybook/react';
import { vi } from 'date-fns/locale';
import React, { useState } from 'react';
import { AppCalendar } from 'src/shared/components/calendar/AppCalendar';

const meta = {
  argTypes: {
    showOutsideDays: {
      control: 'boolean',
      description: 'Show days out of the current month',
    },
  },
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
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <AppCalendar mode='single' onSelect={setDate} selected={date} />;
  },
};

export const DisabledDayOutsideMonth: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <AppCalendar mode='single' onSelect={setDate} selected={date} showOutsideDays={false} />;
  },
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
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <AppCalendar disableNavigation mode='single' onSelect={setDate} selected={date} />;
  },
};

export const DisabledDays: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <AppCalendar
        disabled={{ after: new Date(2024, 11, 5), before: new Date(2024, 11, 18) }}
        mode='single'
        onSelect={setDate}
        selected={date}
      />
    );
  },
};

export const DisabledWeekend: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <AppCalendar disabled={{ dayOfWeek: [0, 6] }} mode='single' onSelect={setDate} selected={date} />;
  },
};

export const CustomLanguage: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <AppCalendar locale={vi} mode='single' onSelect={setDate} selected={date} />;
  },
};

export const SetStartDay: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <AppCalendar mode='single' onSelect={setDate} selected={date} weekStartsOn={1} />;
  },
};

export const ShowRangeDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <AppCalendar
        fromDate={new Date(2024, 1, 4)}
        mode='single'
        onSelect={setDate}
        selected={date}
        toDate={new Date(2024, 11, 29)}
        weekStartsOn={1}
      />
    );
  },
};

export const LayoutDropdown: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <AppCalendar
        fromMonth={new Date(2000, 1)}
        mode='single'
        onSelect={setDate}
        selected={date}
        toMonth={new Date(2099, 6)}
        weekStartsOn={1}
        captionLayout='dropdown'
        classNames={{
          caption_dropdowns: 'flex',
          months: 'p-3'
        }}
      />
    );
  },
};
