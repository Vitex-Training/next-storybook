'use client';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'src/shared/components/table/Table';
import { TableBody } from 'src/shared/components/table/TableBody';
import { TableCell } from 'src/shared/components/table/TableCell';
import { TableFooter } from 'src/shared/components/table/TableFooter';
import { TableHeader } from 'src/shared/components/table/TableHeader';
import { TableRow } from 'src/shared/components/table/TableRow';
import { Column, useTable } from 'src/shared/hooks/useTable';

type Example = {
  amount: string;
  email: string;
  status: string;
};

const columns: Column<Example>[] = [
  {
    cell: () => {
      return <input className='size-4 rounded-xl border-gray-300 text-blue-600' type='checkbox' />;
    },
    header: () => {
      return <input className='size-4 rounded-xl border-gray-300 text-blue-600' type='checkbox' />;
    },
    id: 'select',
  },
  { accessor: 'status', header: 'Status' },
  { accessor: 'email', header: 'Email' },
  { accessor: 'amount', header: 'Amount' },
  {
    cell: () => {
      return <FontAwesomeIcon className='cursor-pointer text-gray-500' icon={faEllipsis} />;
    },
    header: '',
    id: 'action',
  },
];

const data = [
  {
    amount: '$316.00',
    email: 'ken99@yahoo.com',
    status: 'Success',
  },
  {
    amount: '$242.00',
    email: 'abe45@gmail.com',
    status: 'Success',
  },
  {
    amount: '$837.00',
    email: 'monserrat44@gmail.com',
    status: 'Processing',
  },
  {
    amount: '$874.00',
    email: 'silas22@gmail.com',
    status: 'Success',
  },
  {
    amount: '$721.00',
    email: 'carmella@hotmail.com',
    status: 'Failed',
  },
  {
    amount: '$127.00',
    email: 'john23@gmail.com',
    status: 'Processing',
  },
];

export default function TablePage() {
  const {
    columns: tableColumns,
    currentPage,
    getTableHeaders,
    getTableRows,
    pageCount,
    setCurrentPage,
  } = useTable<Example>({
    columns,
    data,
    initialPageSize: 5,
  });
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <Table>
        <TableHeader>
          <TableRow>
            {getTableHeaders().map((column, index) => (
              <TableCell isHeader key={index}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {getTableRows().map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((col, colIndex) => (
                <TableCell key={colIndex}>{col}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableCell colSpan={tableColumns.length}>
            <div className='flex items-center justify-between'>
              <div>
                Page {currentPage} of {pageCount}
              </div>
              <div>
                <button
                  className='rounded border border-gray-300 px-3 py-1 text-xs font-semibold hover:bg-gray-100 disabled:text-gray-400'
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev: number) => Math.max(prev - 1, 1))}>
                  Previous
                </button>
                <button
                  className='ml-2 rounded border border-gray-300 px-3 py-1 text-xs font-semibold hover:bg-gray-100 disabled:text-gray-400'
                  disabled={currentPage === pageCount}
                  onClick={() => setCurrentPage((prev: number) => Math.min(prev + 1, pageCount))}>
                  Next
                </button>
              </div>
            </div>
          </TableCell>
        </TableFooter>
      </Table>
    </div>
  );
}
