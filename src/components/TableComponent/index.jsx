import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

const TableComponent = ({ columns, data, className }) => {
  const customSortingFns = {
    alphanumeric: (rowA, rowB, columnId) => {
      const a = String(rowA.getValue(columnId)).toLowerCase();
      const b = String(rowB.getValue(columnId)).toLowerCase();
      return a.localeCompare(b);
    },
    numeric: (rowA, rowB, columnId) => {
      const a = parseFloat(rowA.getValue(columnId));
      const b = parseFloat(rowB.getValue(columnId));
      return a - b;
    },
  };

  const preparedColumns = columns.map((col) => ({
    ...col,
    sortingFn: col.sortType ? customSortingFns[col.sortType] : undefined,
  }));

  const table = useReactTable({
    data,
    columns: preparedColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table className={className}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                style={{
                  cursor: header.column.getCanSort() ? "pointer" : "default",
                }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {/* {{
                  asc: " 🔼",
                  desc: " 🔽",
                }[header.column.getIsSorted()] ?? null} */}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.length === 0 ? (
          <tr>
            <td colSpan={columns.length}>No data found</td>
          </tr>
        ) : (
          table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default React.memo(TableComponent);
