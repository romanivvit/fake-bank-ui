import axiosManagerUtil from '../axiosManager';

export const operationApiService = {
    receiveOperationHistory(userId:string) {
        return axiosManagerUtil.get$(`http://localhost:8080/fromAccount/${userId}`);
    },
    createOperation(data:unknown) {
        return axiosManagerUtil.post$(`http://localhost:8080/v1/operations`, data);
    },
};
