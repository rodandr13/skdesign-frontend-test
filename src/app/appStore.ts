import { configureStore } from "@reduxjs/toolkit";

import personReducer from "@/entities/person/model/personSlice";
import loadingDataReducer from "@/features/loadPersonsData/model/loadingSlice";
import globalFilterReducer from "@/widgets/personViewer/model/globalFilterSlice";

export const appStore = configureStore({
  reducer: {
    person: personReducer,
    globalFilter: globalFilterReducer,
    loadingData: loadingDataReducer,
  },
});

export type TypeRootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
