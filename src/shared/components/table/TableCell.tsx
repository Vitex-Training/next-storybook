import React from 'react';

type TableCellProps = {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly colSpan?: number;
  readonly isHeader?: boolean;
};

export const TableCell: React.FC<TableCellProps> = ({ children, className = '', colSpan = 1, isHeader = false }) => {
  const Tag = isHeader ? 'th' : 'td';
  const styles = isHeader
    ? 'px-4 py-2 text-left text-sm font-semibold text-gray-700 tracking-wider'
    : 'px-4 py-3 whitespace-nowrap text-sm text-gray-900';

  return (
    <Tag className={`${styles} ${className}`} colSpan={colSpan}>
      {children}
    </Tag>
  );
};
