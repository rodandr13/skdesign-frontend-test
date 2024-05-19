"use client";

import { useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { DataType } from "@/types";

import { columns } from "./columns";

interface Props {
  fetchData: DataType[];
}

export const BasicTable = ({ fetchData }: Props) => {
  const [data, setData] = useState<DataType[]>(fetchData);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    initialState: {
      columnVisibility: {
        streetAddress: false,
        city: false,
        state: false,
        zip: false,
        description: false,
      },
    },
    columns,
    data,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      pagination,
      globalFilter,
    },
  });

  const [filterValue, setFilterValue] = useState("");

  const handleCLickFilter = () => {
    setGlobalFilter(String(filterValue));
  };

  return (
    <div>
      <div>
        <input
          value={filterValue ?? ""}
          onChange={(e) => setFilterValue(String(e.target.value))}
          placeholder="Фильтр по все таблице"
        />
        <button onClick={handleCLickFilter}>Фильтровать</button>
      </div>
      <table>
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
      </table>
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
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Показать {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
