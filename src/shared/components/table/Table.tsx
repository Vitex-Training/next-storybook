import { ReactNode } from 'react';

/**
 * Các props cho component `Table`.
 *
 * @typedef TableProps
 * @property {ReactNode} children - Nội dung của bảng, thường bao gồm các thành phần con như `TableHeader`, `TableBody`, v.v.
 * @property {string} [className] - Các lớp CSS bổ sung để tùy chỉnh giao diện của bảng (nếu cần).
 */
type TableProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Component `Table` tái sử dụng, cung cấp một giao diện bảng đơn giản, có thể tùy chỉnh và đáp ứng tốt.
 *
 * Component này được thiết kế để kết hợp với các thành phần con khác như `TableHeader`, `TableBody`, `TableFooter`, `TableRow`
 * và `TableCell`. Bảng có sẵn các kiểu dáng mặc định nhưng cũng hỗ trợ thêm các lớp CSS bổ sung thông qua
 * prop `className` để tùy chỉnh.
 *
 * @param {TableProps} props - Các props của component Table.
 * @returns {JSX.Element} Component Table được render.
 */
export const Table: React.FC<TableProps> = ({ children, className = '' }) => {
  return (
    <div className='overflow-x-auto rounded-md border border-gray-200'>
      <table className={`min-w-full divide-y divide-gray-200 text-sm ${className}`}>{children}</table>
    </div>
  );
};
