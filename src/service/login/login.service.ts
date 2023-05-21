import axiosManagerUtil from '../axiosManager';
import {IResponseLoginUser} from "./login.model";

// TODO change to a proper baseUrl
const baseUrl = 'http://localhost:8080/api/auth/login';
export const loginApiService = {
    login(data: unknown) {
        return axiosManagerUtil.post$<IResponseLoginUser>(`${baseUrl}`, data);
    },
};
