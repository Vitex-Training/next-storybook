import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

// Metadata cho Storybook
const meta = {
  argTypes: {
    children: {
      control: false,
      description:
        'Nội dung bảng, bao gồm `<TableRow>`, `<TableCell>`. Đây là nơi để cấu trúc tiêu đề bảng theo nhu cầu.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Các class CSS bổ sung để tùy chỉnh giao diện của bảng.',
    },
  },
  component: TableHeader,
  tags: ['autodocs'],
  title: 'Components/Table/TableHeader',
} satisfies Meta<typeof TableHeader>;
export default meta;

// Template chung cho component TableHeader
const Template: StoryFn = () => (
  <TableHeader>
    <TableRow className='bg-gray-100'>
      <TableCell isHeader>Status</TableCell>
      <TableCell isHeader>Email</TableCell>
      <TableCell isHeader>Amount</TableCell>
    </TableRow>
  </TableHeader>
);

// Story mặc định
export const Default = Template.bind({});
Default.args = {
  className: '',
};
