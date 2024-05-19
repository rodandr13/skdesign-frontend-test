import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

const globalFilterSlice = createSlice({
  name: "globalFilter",
  initialState,
  reducers: {
    setGlobalFilter: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setGlobalFilter } = globalFilterSlice.actions;
export default globalFilterSlice.reducer;
