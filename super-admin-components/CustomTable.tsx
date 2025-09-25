"use client"

import React from 'react';

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

const CustomTable: React.FC<TableProps> = ({ children, className = '' }) => {
  return (
    <table className={`w-full border-collapse ${className}`}>
      {children}
    </table>
  );
};

const CustomTableHeader: React.FC<TableProps> = ({ children, className = '' }) => {
  return (
    <thead className={`bg-gray-100 ${className}`}>
      {children}
    </thead>
  );
};

const CustomTableBody: React.FC<TableProps> = ({ children, className = '' }) => {
  return (
    <tbody className={className}>
      {children}
    </tbody>
  );
};

const CustomTableRow: React.FC<TableProps> = ({ children, className = '' }) => {
  return (
    <tr className={`border-b hover:bg-gray-50 ${className}`}>
      {children}
    </tr>
  );
};

const CustomTableCell: React.FC<TableProps> = ({ children, className = '' }) => {
  return (
    <td className={`px-4 py-2 ${className}`}>
      {children}
    </td>
  );
};

export { 
  CustomTable as Table, 
  CustomTableHeader as TableHeader, 
  CustomTableBody as TableBody, 
  CustomTableRow as TableRow, 
  CustomTableCell as TableCell 
};