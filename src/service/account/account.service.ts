import axiosManagerUtil from '../axiosManager';
import {IResponseAccountData} from "./account.model";

const baseUrl = 'http://localhost:8080/v1/accounts';
export const accountApiService = {
    getAccountByUserId(userId:string) {
        return axiosManagerUtil.get$<IResponseAccountData>(`${baseUrl}/${userId}`);
    },
    createAccountByUserId(data:unknown) {
        return axiosManagerUtil.post$(`${baseUrl}`, data);
    },
};
