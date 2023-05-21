import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import './styles.scss'
import {changeAuth} from "../../store/slices/auth";
import {useAppDispatch} from "../../store/hooks";
import {useLogin} from "../../hooks/useLogin";
import {log} from "util";
import {setUserData} from "../../store/slices/user";

export const LoginPage = ()=> {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [validationError, setValidationError] = useState(false);
    const {
        login
    } = useLogin();
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.stopPropagation();
        e.preventDefault();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const email = e.target[0].value;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const pass = e.target[1].value;
        // if (email !== 'test') {
        //     return setValidationError(true);
        // }
        // if (pass !== 'test') {
        //     return setValidationError(true);
        // }

        try {
            const loginData = await login({
                "email": email,
                "password": pass
            })
            console.log(loginData);
            if (loginData !== undefined) {
                dispatch(changeAuth(true));
                return navigate('/');
            }
        }
        catch (e){
            setValidationError(true);
        }
    };
    return (
        <div>
            <div className="login-page">
                <div className="form">
                    <h1>Login</h1>
                    {validationError && <span> The credentials are wrong</span>}
                    <form className="login-form" onSubmit={(e) => handleLogin(e)}>
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
