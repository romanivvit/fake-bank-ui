import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

type TAuthState = {
    authenticated: boolean
};

const initialState: TAuthState = {
    authenticated: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeAuth: (state, action: PayloadAction<boolean>) => {
            state.authenticated = action.payload;
        },
    },
});

export const {
    changeAuth,
} = authSlice.actions;

export const selectAuthStatus = (state: RootState) => state[authSlice.name].authenticated;

export const authReducer = authSlice.reducer;
