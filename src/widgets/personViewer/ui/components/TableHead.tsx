import { flexRender } from "@tanstack/react-table";
import { Table } from "@tanstack/react-table";

import { Person } from "@/shared/types/types";

interface Props {
  table: Table<Person>;
}

export const TableHead = ({ table }: Props) => {
  console.log("TableHead");
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              <div
                {...{
                  onClick: header.column.getToggleSortingHandler(),
                }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {{ asc: "▲", desc: "▼" }[
                  header.column.getIsSorted() as string
                ] ?? null}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
