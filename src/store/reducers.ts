import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import {userReducer} from "./slices/user";
import {accountReducer} from "./slices/account";
import {operationReducer} from "./slices/operation";

const reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    account: accountReducer,
    operation: operationReducer
});

export default reducers;
