import React from 'react';

const TableCell: React.FC<{
    children: React.ReactNode;
    isHeader?: boolean;
    isComfygen?: boolean;
    isEven?: boolean;
}> = ({ children, isHeader = false, isComfygen = false, isEven = false }) => {
    if (isHeader) {
        return (
            <th className="py-4 px-5 font-['Plus_Jakarta_Sans'] text-sm font-bold text-left first:rounded-tl-xl last:rounded-tr-xl">
                {children}
            </th>
        );
    }
    return (
        <td className={`py-3.5 px-5 text-sm border-b border-[#e2e8f4] ${isEven ? 'bg-[#f8faff]' : 'bg-white'} ${isComfygen ? 'text-[#16a34a] font-semibold' : 'text-[#cbd5e1] font-medium'}`}>
            {children}
        </td>
    )
}

export default TableCell
