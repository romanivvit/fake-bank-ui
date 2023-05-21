import {useMutation, useQuery} from "@tanstack/react-query";
import {useAppDispatch} from "../store/hooks";
import {useSelector} from "react-redux";
import {selectUserId} from "../store/slices/user";
import {operationApiService} from "../service/operation/operation.service";
import {setOperationHistory, setOperationState} from "../store/slices/operation";

export const useOperation = () => {
    const dispatch = useAppDispatch();
    const userId = useSelector(selectUserId);
    const { isLoading, data: operationData,  } = useQuery(
        ['get-operation', userId],
        () => operationApiService.receiveOperationHistory(`${userId}`),
        {
            onError: (error) => {
                console.log('here error', error);
            },
            onSuccess: (res) => {
                const data = {
                    operations: res.operations,
                    creationDate: res.created_at
                };
                dispatch(setOperationHistory(data))
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
                dispatch(setOperationState(false));
            },
            onSuccess: (res) => {
                dispatch(setOperationState(true));
            },
        },
    );

    return {
        isLoading,
        createOperationData,
        createOperation,
        errorOperationData,
        isLoadingOperationData,
        operationData
    };
};
