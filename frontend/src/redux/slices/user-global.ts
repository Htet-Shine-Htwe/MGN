import { RootState } from './../store';
import { createSlice } from "@reduxjs/toolkit";

interface UserGlobal {
    isAuth: boolean;
    user: null | {
        id: string;
        email: string;
        username: string;
        role: string;
    };
    safeMode: boolean;
}

const initialState: UserGlobal = {
    isAuth: false,
    user: null,
    safeMode: false,
};

export const userGlobalSlice = createSlice({
    name: "userGlobal",
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
        },
        setSafeMode(state, action) {
            state.safeMode = action.payload;
        },
    },
});


export const { setAuth, setUser, setSafeMode } = userGlobalSlice.actions;
export default userGlobalSlice.reducer;
export const selectSafeMode = (state : RootState) => state.userGlobal.safeMode;