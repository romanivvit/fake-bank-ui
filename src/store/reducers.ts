import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import {userReducer} from "./slices/user";
import {accountReducer} from "./slices/account";

const reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    account: accountReducer
});

export default reducers;
