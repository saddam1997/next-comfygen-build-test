
import TableCell from './TableCell';

const TableRow = ({ row, index }) => {
    const isEven = index % 2 !== 0;
    return (
        <tr>
            <TableCell isEven={isEven}>
                <span className="font-semibold text-[#212121]">{row.feature}</span>
            </TableCell>
            <TableCell isComfygen={row.comfygen.highlight} isEven={isEven}>
                {row.comfygen.text}
            </TableCell>
            <TableCell isComfygen={row.freelance.highlight} isEven={isEven} >
                {row.freelance.text}
            </TableCell>
            <TableCell isEven={isEven}>
                {row.cheap.text}
            </TableCell>
            <TableCell isComfygen={row.script.highlight} isEven={isEven}>
                {row.script.text}
            </TableCell>
        </tr>
    )
}

export default TableRow
