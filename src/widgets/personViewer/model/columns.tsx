import { createColumnHelper } from "@tanstack/table-core";

import { Person } from "@/shared/types/schema";

const columnHelper = createColumnHelper<Person>();

export const columns = [
  columnHelper.accessor("id", {
    header: () => "id",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("firstName", {
    header: () => "firstName",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: () => "lastName",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: () => "email",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("phone", {
    header: () => "phone",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("address.streetAddress", {
    id: "streetAddress",
    header: () => "streetAddress",
    cell: (info) => info.getValue(),
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("address.city", {
    id: "city",
    header: () => "city",
    cell: (info) => info.getValue(),
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("address.state", {
    id: "state",
    header: () => "state",
    cell: (info) => info.getValue(),
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("address.zip", {
    id: "zip",
    header: () => "zip",
    cell: (info) => info.getValue(),
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("description", {
    header: () => "description",
    cell: (info) => info.getValue(),
    enableGlobalFilter: false,
  }),
];
