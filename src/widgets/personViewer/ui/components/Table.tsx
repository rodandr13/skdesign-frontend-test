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

import { selectPerson } from "@/entities/person/model/personSlice";
import { selectPersons } from "@/entities/person/model/selectors";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux";
import { Person } from "@/shared/types/schema";
import { Spinner } from "@/shared/ui";
import { GlobalFilter } from "@/widgets/personViewer/ui/components/GlobalFilter";

import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { TablePagination } from "./TablePagination";
import { columns } from "../../model/columns";
import styles from "../styles.module.scss";

export const Table = () => {
  const persons = useAppSelector(selectPersons);
  const loading = useAppSelector((state) => state.person.loading);
  const error = useAppSelector((state) => state.person.error);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const globalFilter = useAppSelector((state) => state.globalFilter);
  const dispatch = useAppDispatch();

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

  const handleRowClick = (person: Person) => {
    dispatch(selectPerson(person));
  };

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;
  return (
    <section className={styles.table__wrapper}>
      {persons.length > 0 ? (
        <>
          <div className={styles.table__filter}>
            <GlobalFilter />
          </div>
          <table className={styles.table}>
            <TableHead table={table} />
            <TableBody table={table} onRowClick={handleRowClick} />
          </table>
          <TablePagination table={table} />
        </>
      ) : (
        <div>Нет данных для отображения</div>
      )}
    </section>
  );
};
