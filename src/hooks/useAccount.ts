import {useMutation, useQuery} from "@tanstack/react-query";


import {accountApiService} from "../service/account/account.service";
import {setAccountData} from "../store/slices/account";
import {useAppDispatch} from "../store/hooks";
import {IRequestCreateAccount} from "../service/account/account.model";
import {useSelector} from "react-redux";
import {selectUserId} from "../store/slices/user";

export const useAccount = () => {
    const dispatch = useAppDispatch();
    const userId = useSelector(selectUserId);
    const { isLoading, data: accountData } = useQuery(
        ['get-accounts', userId],
        () => accountApiService.getAccountByUserId(`${userId}`),
        {
            onError: (error) => {
                console.log('here error', error);
            },
            onSuccess: (res) => {
                const accountData = {
                    accountId: res.account_id,
                    balance: res.balance,
                    creationDate: res.created_at
                }
                dispatch(setAccountData(accountData));
            },
        }
    );

    const {
        data: createAccountData,
        mutateAsync: createAccount,
        isLoading: isLoadingCreateAccount,
        error: errorCreateAccount,
    } = useMutation<any, any, IRequestCreateAccount>(
        (data) => accountApiService.createAccountByUserId(data),
        {
            mutationKey: ['create-account'],
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
        accountData,
        createAccount,
    };
};
