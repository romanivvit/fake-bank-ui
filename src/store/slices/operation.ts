import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import {OperationDetails} from "../../service/operation/operation.model";

type TOperationState = {
    operations:  Array<OperationDetails>
    creationDate:string
    operationState: boolean
};

type TOperationHistory = {
    operations: Array<OperationDetails>
    creationDate: string
}

const initialState: Partial<TOperationState> = {
};

export const operationSlice = createSlice({
    name: 'operation',
    initialState,
    reducers: {
        setOperationState: (state, action: PayloadAction<boolean>) => {
            state.operationState = action.payload;
        },
        setOperationHistory:(state, action: PayloadAction<TOperationHistory>) => {
            state.operations = action.payload.operations;
            state.creationDate = action.payload.creationDate;
        },
    },
});

export const {
    setOperationState,
    setOperationHistory,
} = operationSlice.actions;

export const selectOperationState = (state: RootState) => state[operationSlice.name].operationState;
export const selectOperationsData = (state: RootState) => state[operationSlice.name].operations;

export const operationReducer = operationSlice.reducer;
