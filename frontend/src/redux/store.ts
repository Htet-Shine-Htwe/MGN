/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";

import { postApi } from "./api/postApi";
import { queryApi } from "./api/queryApi";
import adminAuthSlice from "./slices/admin-auth-slice";
import categoriesSlice from "./slices/category-slice";

export const store = configureStore({
  reducer: {
    [queryApi.reducerPath]: queryApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    adminAuth: adminAuthSlice,
    categories: categoriesSlice,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(
      postApi.middleware,
      queryApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;