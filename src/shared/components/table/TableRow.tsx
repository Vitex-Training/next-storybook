import React, { ReactNode } from 'react';

type TableRowProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export const TableRow: React.FC<TableRowProps> = ({ children, className = '' }) => {
  return <tr className={`transition-colors hover:bg-gray-100 ${className}`}>{children}</tr>;
};
