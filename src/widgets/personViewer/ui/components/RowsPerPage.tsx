import { Table } from "@tanstack/react-table";

import { ROWS_PER_PAGE } from "@/shared/lib/constans";
import { Person } from "@/shared/types/types";

interface Props {
  table: Table<Person>;
}

export const RowsPerPage = ({ table }: Props) => {
  return (
    <select
      value={table.getState().pagination.pageSize}
      onChange={(e) => {
        table.setPageSize(Number(e.target.value));
      }}
    >
      {ROWS_PER_PAGE.map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          Показать {pageSize}
        </option>
      ))}
    </select>
  );
};
