import { configureStore } from "@reduxjs/toolkit";

import personReducer from "../entities/person/model/personSlice";

export const appStore = configureStore({
  reducer: {
    person: personReducer,
  },
});

export type TypeRootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
