import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

type TAccountState = {
    accountId: number
    balance: number
    creationDate:string
};

const initialState: Partial<TAccountState> = {
};

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAccountData: (state, action: PayloadAction<TAccountState>) => {
            state.accountId = action.payload.accountId;
            state.balance = action.payload.balance;
            state.creationDate = action.payload.creationDate;
        },
    },
});

export const {
    setAccountData,
} = accountSlice.actions;

export const selectAccountId = (state: RootState) => state[accountSlice.name].accountId;
export const selectAccountBalance= (state: RootState) => state[accountSlice.name].balance;
export const selectAccountCreationDate = (state: RootState) => state[accountSlice.name].creationDate;

export const accountReducer = accountSlice.reducer;
