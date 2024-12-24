import React, { ReactNode } from 'react';

type TableHeaderProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export const TableHeader: React.FC<TableHeaderProps> = ({ children, className = '' }) => {
  return <thead className={`bg-gray-100 ${className}`}>{children}</thead>;
};
