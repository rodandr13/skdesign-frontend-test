import { useState } from "react";

import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { useAppSelector } from "@/shared/lib/hooks/redux";
import { Spinner } from "@/shared/ui";
import { GlobalFilter } from "@/widgets/personViewer/ui/components/GlobalFilter";

import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { TablePagination } from "./TablePagination";
import { columns } from "../../model/columns";

export const Table = () => {
  console.log("Table");
  const { persons, loading, error } = useAppSelector((state) => state.person);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const globalFilter = useAppSelector((state) => state.globalFilter);

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
    state: {
      sorting,
      pagination,
      globalFilter,
    },
    columns,
    data: persons,
    globalFilterFn: "includesString",
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;
  return (
    <section>
      {persons.length > 0 ? (
        <>
          <GlobalFilter />
          <table>
            <TableHead table={table} />
            <TableBody table={table} />
          </table>
          <TablePagination table={table} />
        </>
      ) : (
        <div>Нет данных для отображения</div>
      )}
    </section>
  );
};
