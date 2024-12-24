import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

// Metadata cho Storybook
const meta = {
  argTypes: {
    children: {
      control: false,
      description: 'Nội dung của hàng, bao gồm `<TableCell>`. Đây là nơi để cấu trúc 1 hàng của bảng theo nhu cầu.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Các class CSS bổ sung để tùy chỉnh giao diện của bảng.',
    },
  },
  component: TableRow,
  tags: ['autodocs'],
  title: 'Components/Table/TableRow',
} satisfies Meta<typeof TableRow>;
export default meta;

// Template chung cho component TableRow
const Template: StoryFn = () => (
  <TableRow className='bg-gray-100'>
    <TableCell className='px-4 py-2'>Success</TableCell>
    <TableCell className='px-4 py-2'>ken99@yahoo.com</TableCell>
    <TableCell className='px-4 py-2'>$316.00</TableCell>
  </TableRow>
);

// Story mặc định
export const Default = Template.bind({});
Default.args = {
  className: '',
};
