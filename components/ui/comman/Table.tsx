// components/CommonTable.tsx

interface TableColumn {
  key: string;
  label: string;
}

interface TableData {
  [key: string]: string;
}

interface CommonTableProps {
  columns: TableColumn[];
  data: TableData[];
}

export default function Table({
  columns,
  data,
}: CommonTableProps) {
  return (
    <section className="w-full py-10">
      <div className="mx-auto w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        {/* Mobile Scroll */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            {/* Table Head */}
            <thead>
              <tr className="bg-[#474797] text-white">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="border border-white px-5 py-4 text-left text-sm font-semibold md:text-base"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className="transition-all duration-300 hover:bg-orange-50"
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="border border-gray-200 px-5 py-6 text-sm leading-7 text-gray-700 md:text-base"
                    >
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}