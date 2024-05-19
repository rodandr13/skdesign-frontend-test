import { Table } from "@tanstack/react-table";

import { Person } from "@/shared/types/types";

import { PaginationToPageNumber } from "./PaginationToPageNumber";
import { RowsPerPage } from "./RowsPerPage";

interface Props {
  table: Table<Person>;
}

export const TablePagination = ({ table }: Props) => {
  console.log("Pagination");
  return (
    <div>
      <button
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {"<<"}
      </button>
      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {"<"}
      </button>
      <span>
        <strong>
          {table.getState().pagination.pageIndex + 1} из{" "}
          {table.getPageCount().toLocaleString()}
        </strong>
      </span>
      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {">"}
      </button>
      <button
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
      >
        {">>"}
      </button>
      <PaginationToPageNumber table={table} />
      <RowsPerPage table={table} />
    </div>
  );
};
