import { Table } from "@tanstack/react-table";

import { Person } from "@/shared/types/schema";

interface Props {
  table: Table<Person>;
}

export const PaginationToPageNumber = ({ table }: Props) => {
  return (
    <span>
      Перейти к странице
      <input
        type="number"
        defaultValue={table.getState().pagination.pageIndex + 1}
        onChange={(e) => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0;
          table.setPageIndex(page);
        }}
      />
    </span>
  );
};
