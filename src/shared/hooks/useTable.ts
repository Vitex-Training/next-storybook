import { useMemo, useState } from 'react';

export type Column<T> = {
  accessor?: keyof T; // Khóa để truy cập giá trị
  cell?: ((context: CellContext<T>) => React.ReactNode) | string;
  header: ((context: HeaderContext<T>) => React.ReactNode) | string;
  id?: string;
};

export interface HeaderContext<T> {
  columns: Column<T>[]; // Thông tin về các cột
}

export interface CellContext<T> {
  accessor?: keyof T; // Khóa để truy cập dữ liệu dòng
  row: T; // Dữ liệu của dòng hiện tại
}

type UseTableProps<T> = {
  columns: Column<T>[]; // Danh sách các cột
  data: T[]; // Dữ liệu bảng
  initialPageSize?: number; // Kích thước trang ban đầu
};

export const useTable = <T extends object>({ columns, data, initialPageSize = 10 }: UseTableProps<T>) => {
  // Quản lý phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  // Tính toán số trang
  const pageCount = Math.ceil(data.length / pageSize);

  // Dữ liệu của trang hiện tại
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize]);

  // Hàm xử lý lấy danh sách header của bảng
  const getTableHeaders = (): (React.ReactNode | string)[] => {
    return (
      columns.map((column) => {
        return typeof column.header === 'function' ? column.header({ columns }) : column.header;
      }) || []
    );
  };

  // Hàm xử lý lấy danh sách các hàng của bảng
  const getTableRows = () => {
    return paginatedData.map((row) => {
      return columns.map((column) => {
        const accessor = column.accessor || (column.id as keyof T);
        return typeof column.cell === 'function' ? column.cell({ accessor, row }) : accessor ? row[accessor] : '';
      });
    });
  };

  // Trả về các giá trị và hàm
  return {
    columns,
    currentPage,
    data: paginatedData,
    getTableHeaders,
    getTableRows,
    pageCount,
    pageSize,
    setCurrentPage,
    setPageSize,
  };
};
