import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { vi } from 'date-fns/locale';
import React, { useState } from 'react';
import { CaptionLayout, DayPickerSingleProps } from 'react-day-picker';
import { AppCalendar } from 'src/shared/components/calendar/AppCalendar';

const AppCalendarStorySingle = (args: DayPickerSingleProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return <AppCalendar className='rounded-md border' onSelect={setDate} selected={date} {...args} />;
};

const meta = {
  args: { mode: 'single', onSelect: fn() },
  argTypes: {
    captionLayout: {
      control: 'radio',
      options: ['buttons', 'dropdown', 'dropdown-buttons'] satisfies CaptionLayout[],
    },
    classNames: {
      control: 'object',
    },
    disabled: {
      control: 'object',
    },
    disableNavigation: {
      control: 'boolean',
    },
    footer: {
      control: 'object',
    },
    fromDate: {
      control: 'date',
    },
    locale: {
      description: 'Language',
    },
    showOutsideDays: {
      control: 'boolean',
    },
    toDate: {
      control: 'date',
    },
    weekStartsOn: {
      control: 'radio',
      options: [0, 1, 2, 3, 4, 5, 6],
    },
  },
  component: AppCalendarStorySingle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Calendar/CalendarSingle',
} satisfies Meta<typeof AppCalendarStorySingle>;

export default meta;
type Story = StoryObj<typeof AppCalendarStorySingle>;

export const Default: Story = {};

export const DisabledDayOutsideMonth: Story = {
  args: {
    showOutsideDays: false,
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
      />
    );
  },
};

export const DisabledNavigation: Story = {
  args: {
    disableNavigation: true,
  },
};

export const DisabledDays: Story = {
  args: {
    disabled: { after: new Date(2024, 11, 5), before: new Date(2024, 11, 18) },
  },
};

export const DisabledWeekend: Story = {
  args: {
    disabled: { dayOfWeek: [0, 6] },
  },
};

export const CustomLanguage: Story = {
  args: {
    locale: vi,
  },
};

export const SetStartDay: Story = {
  args: {
    weekStartsOn: 1,
  },
};

export const ShowRangeDate: Story = {
  args: {
    fromDate: new Date(2024, 1, 4),
    toDate: new Date(2024, 11, 29),
  },
};

export const LayoutDropdown: Story = {
  args: {
    captionLayout: 'dropdown',
    classNames: {
      caption_dropdowns: 'flex justify-center',
      caption_label: 'hidden',
      dropdown_month: 'text-sm',
      dropdown_year: 'text-sm',
    },
    fromMonth: new Date(2000, 1),
    toMonth: new Date(2099, 6),
  },
};
