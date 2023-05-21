import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

type TUserState = {
    userId: number
    userName: string
    userEmail:string
};

const initialState: Partial<TUserState> = {
    userName: '',
    userEmail: '',
    userId: 0
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<TUserState>) => {
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
        },
    },
});

export const {
    setUserData,
} = userSlice.actions;

export const selectUserId = (state: RootState) => state[userSlice.name].userId;
export const selectUserName = (state: RootState) => state[userSlice.name].userName;
export const selectUserEmail = (state: RootState) => state[userSlice.name].userEmail;

export const userReducer = userSlice.reducer;
