import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Table } from './Table'; // Điều chỉnh đường dẫn import theo cấu trúc thư mục của bạn
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

// Metadata cho Storybook
const meta = {
  argTypes: {
    children: {
      control: false,
      description:
        'Nội dung bảng, bao gồm `<TableHeader>`, `<TableBody>` và `<TableFooter>`. Đây là nơi để cấu trúc bảng theo nhu cầu.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Các class CSS bổ sung để tùy chỉnh giao diện của bảng.',
    },
  },
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table/Table',
} satisfies Meta<typeof Table>;
export default meta;

// Template chung cho component Table
const Template: StoryFn = (args) => (
  <Table {...args}>
    <TableHeader>
      <TableRow className='bg-gray-100'>
        <TableCell className='px-4 py-2 text-left' isHeader>
          Status
        </TableCell>
        <TableCell className='px-4 py-2 text-left' isHeader>
          Email
        </TableCell>
        <TableCell className='px-4 py-2 text-left' isHeader>
          Amount
        </TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className='px-4 py-2'>Success</TableCell>
        <TableCell className='px-4 py-2'>ken99@yahoo.com</TableCell>
        <TableCell className='px-4 py-2'>$316.00</TableCell>
      </TableRow>
      <TableRow className='bg-gray-50'>
        <TableCell className='px-4 py-2'>Failed</TableCell>
        <TableCell className='px-4 py-2'>carmella@hotmail.com</TableCell>
        <TableCell className='px-4 py-2'>$721.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

// Story mặc định
export const Default = Template.bind({});
Default.args = {
  className: '',
};
