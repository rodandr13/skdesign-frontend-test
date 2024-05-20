import { createAsyncThunk } from "@reduxjs/toolkit";

import { Person } from "@/shared/types/schema";

export const fetchPersons = createAsyncThunk<Person[], number>(
  "person/fetchPersons",
  async (rows) => {
    const res = await fetch(`/api/filltext?rows=${rows}`);
    if (!res.ok) {
      throw new Error("Ошибка при получении данных");
    }
    return res.json();
  }
);
