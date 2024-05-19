import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchPersons } from "@/entities/person";
import { Person } from "@/shared/types/types";

interface PersonState {
  persons: Person[];
  loading: boolean;
  error: string | null;
}

const initialState: PersonState = {
  persons: [],
  loading: false,
  error: null,
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPersons.fulfilled,
        (state, action: PayloadAction<Person[]>) => {
          state.loading = false;
          state.persons = action.payload;
        }
      )
      .addCase(fetchPersons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка при загрузке данных";
      });
  },
});

export default personSlice.reducer;
