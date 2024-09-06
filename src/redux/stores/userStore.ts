import { configureStore } from "@reduxjs/toolkit";
import { sharedMiddleware, sharedReducers } from "./sharedStore";
import { userGlobalSlice } from "../slices/user-global";

export const userStore = configureStore({
    reducer:{
        ...sharedReducers,
        userGlobal: userGlobalSlice.reducer,
    },
    middleware: sharedMiddleware
});

export type UserRootState = ReturnType<typeof userStore.getState>; // Typing the user store
export type UserAppDispatch = typeof userStore.dispatch;