import React from 'react'
import TableCell from './TableCell'

const TableHeader = ({ comparisonData }) => {
    return (
        <thead>
            <tr className="bg-gradient-to-r from-[#406AAF] via-[#7D3C97] to-[#EA6224] text-white">
                {comparisonData.headers.map((header: any, idx: any) => (
                    <TableCell key={idx} isHeader>
                        {header}
                    </TableCell>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader
