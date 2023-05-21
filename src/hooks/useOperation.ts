import {useMutation, useQuery} from "@tanstack/react-query";
import {useAppDispatch} from "../store/hooks";
import {useSelector} from "react-redux";
import {selectUserId} from "../store/slices/user";
import {operationApiService} from "../service/operation/operation.service";

export const useOperation = () => {
    const dispatch = useAppDispatch();
    const userId = useSelector(selectUserId);
    const { isLoading, data: operationData } = useQuery(
        ['get-operation', userId],
        () => operationApiService.receiveOperationHistory(`${userId}`),
        {
            onError: (error) => {
                console.log('here error', error);
            },
            onSuccess: (res) => {
                console.log(res);
            },
        }
    );

    const {
        data: createOperationData,
        mutateAsync: createOperation,
        isLoading: isLoadingOperationData,
        error: errorOperationData,
    } = useMutation<any, any, any>(
        (data) => operationApiService.createOperation(data),
        {
            mutationKey: ['create-operation'],
            onError: (error) => {
                console.log('here error', error);
            },
            onSuccess: (res) => {
                console.log(res);
                // dispatch(setUserData(newUserData));
            },
        },
    );

    return {
        isLoading,
        createOperationData,
        createOperation,
    };
};
