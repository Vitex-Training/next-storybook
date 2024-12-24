import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

// Metadata cho Storybook
const meta = {
  argTypes: {
    children: {
      control: false,
      description:
        'Nội dung bảng, bao gồm `<TableRow>`, `<TableCell>`. Đây là nơi để cấu trúc nội dung bảng theo nhu cầu.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Các class CSS bổ sung để tùy chỉnh giao diện của bảng.',
    },
  },
  component: TableBody,
  tags: ['autodocs'],
  title: 'Components/Table/TableBody',
} satisfies Meta<typeof TableBody>;
export default meta;

// Template chung cho component TableBody
const Template: StoryFn = () => (
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
);

// Story mặc định
export const Default = Template.bind({});
Default.args = {
  className: '',
};
