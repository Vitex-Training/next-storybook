import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';

// Metadata cho Storybook
const meta = {
  argTypes: {
    children: {
      control: false,
      description: 'Nội dung footer của bảng. Đây là nơi để cấu trúc nội dung footer của bảng theo nhu cầu.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Các class CSS bổ sung để tùy chỉnh giao diện của bảng.',
    },
  },
  component: TableFooter,
  tags: ['autodocs'],
  title: 'Components/Table/TableFooter',
} satisfies Meta<typeof TableFooter>;
export default meta;

// Template chung cho component TableFooter
const Template: StoryFn = () => (
  <TableFooter>
    <TableCell colSpan={5}>
      <div className='flex items-center justify-between'>
        <div>Page 1 of 2</div>
        <div>
          <button
            className='rounded border border-gray-300 px-3 py-1 text-xs font-semibold hover:bg-gray-100 disabled:text-gray-400'
            disabled>
            Previous
          </button>
          <button className='ml-2 rounded border border-gray-300 px-3 py-1 text-xs font-semibold hover:bg-gray-100 disabled:text-gray-400'>
            Next
          </button>
        </div>
      </div>
    </TableCell>
  </TableFooter>
);

// Story mặc định
export const Default = Template.bind({});
Default.args = {
  className: '',
};
