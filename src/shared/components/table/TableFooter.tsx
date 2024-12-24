import React, { ReactNode } from 'react';

type TableFooterProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export const TableFooter: React.FC<TableFooterProps> = ({ children, className = '' }) => {
  return (
    <tfoot className={`bg-gray-100 ${className}`}>
      <tr>{children}</tr>
    </tfoot>
  );
};
