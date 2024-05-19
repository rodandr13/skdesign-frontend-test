"use client";

import { LoadPersonsData } from "@/features/loadPersonsData";
import { BIG_DATA_COUNT, SMALL_DATA_COUNT } from "@/shared/lib/constans";

import { GlobalFilter } from "./components/GlobalFilter";
import { Table } from "./components/Table";

export const PersonViewer = () => {
  console.log("PersonViewer");

  return (
    <div>
      <h2>Выберите набор данных</h2>
      <LoadPersonsData dataRows={SMALL_DATA_COUNT} title="Маленький" />
      <LoadPersonsData dataRows={BIG_DATA_COUNT} title="Большой" />
      <GlobalFilter />
      <Table />
    </div>
  );
};
