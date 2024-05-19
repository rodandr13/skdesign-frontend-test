import { flexRender } from "@tanstack/react-table";
import { Table } from "@tanstack/react-table";

import { Person } from "@/shared/types/types";

interface Props {
  table: Table<Person>;
}

export const TableBody = ({ table }: Props) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
