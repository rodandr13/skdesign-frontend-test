import { flexRender } from "@tanstack/react-table";
import { Table } from "@tanstack/react-table";

import { Person } from "@/shared/types/types";

interface Props {
  table: Table<Person>;
  onRowClick: (person: Person) => void;
}

export const TableBody = ({ table, onRowClick }: Props) => {
  console.log("TableBody");

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id} onClick={() => onRowClick(row.original)}>
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
