import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { TableCell } from './TableCell';

// Metadata cho Storybook
const meta = {
  argTypes: {
    children: {
      control: false,
      description: 'Nội dung của 1 ô. Đây là nơi để cấu trúc 1 ô trong 1 hàng của bảng theo nhu cầu.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Các class CSS bổ sung để tùy chỉnh giao diện của ô.',
    },
  },
  component: TableCell,
  tags: ['autodocs'],
  title: 'Components/Table/TableCell',
} satisfies Meta<typeof TableCell>;
export default meta;

// Template chung cho component TableCell
const Template: StoryFn = () => (
  <>
    <TableCell className='px-4 py-2'>Success</TableCell>
    <TableCell className='px-4 py-2'>ken99@yahoo.com</TableCell>
    <TableCell className='px-4 py-2'>$316.00</TableCell>
  </>
);

// Story mặc định
export const Default = Template.bind({});
Default.args = {
  className: '',
};
