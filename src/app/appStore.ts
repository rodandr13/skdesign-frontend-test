import { configureStore } from "@reduxjs/toolkit";

import personReducer from "@/entities/person/model/personSlice";
import globalFilterReducer from "@/widgets/personViewer/model/globalFilterSlice";

export const appStore = configureStore({
  reducer: {
    person: personReducer,
    globalFilter: globalFilterReducer,
  },
});

export type TypeRootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
