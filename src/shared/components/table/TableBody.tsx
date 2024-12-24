import React, { ReactNode } from 'react';

type TableBodyProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export const TableBody: React.FC<TableBodyProps> = ({ children, className = '' }) => {
  return <tbody className={`divide-y divide-gray-200 bg-white ${className}`}>{children}</tbody>;
};
