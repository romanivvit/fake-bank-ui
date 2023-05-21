import {useMutation} from "@tanstack/react-query";
import {loginApiService} from "../service/login/login.service";
import {IRequestLoginUser, IResponseLoginUser} from "../service/login/login.model";
import {useAppDispatch} from "../store/hooks";
import {setUserData} from "../store/slices/user";

export const useLogin = () => {
    const dispatch = useAppDispatch();
    const {
        data: loginData,
        mutateAsync: login,
        isLoading: isLoadingLogin,
        error: errorLogin,
    } = useMutation<IResponseLoginUser, any, IRequestLoginUser>(
        (data) => loginApiService.login(data),
        {
            mutationKey: ['user-login'],
            onError: (error) => {
                console.log('here error', error);
            },
            onSuccess: (res) => {
                const newUserData = {
                    userName: res.user_name,
                    userId: res.user_id,
                    userEmail: res.user_email
                }
                dispatch(setUserData(newUserData));
            },
        },
    );

    return {
        loginData,
        login,
        isLoadingLogin,
        errorLogin,
    };
};
