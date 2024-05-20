import { Table } from "@tanstack/react-table";

import { Person } from "@/shared/types/schema";

import { PaginationToPageNumber } from "./PaginationToPageNumber";
import { RowsPerPage } from "./RowsPerPage";
import styles from "../styles.module.scss";

interface Props {
  table: Table<Person>;
}

export const TablePagination = ({ table }: Props) => {
  return (
    <section className={styles.pagination}>
      <div className={styles.pagination__navigation}>
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
      </div>
      <PaginationToPageNumber table={table} />
      <RowsPerPage table={table} />
    </section>
  );
};
