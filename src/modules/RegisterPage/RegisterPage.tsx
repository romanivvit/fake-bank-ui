import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {changeAuth} from "../../store/slices/auth";
import {useAppDispatch} from "../../store/hooks";
import './styles.scss'

export const RegisterPage = ()=> {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [validationError, setValidationError] = useState(false);

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.stopPropagation();
        e.preventDefault();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const email = e.target[0].value;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const pass = e.target[1].value;
        if (email !== 'admin.senator@senatorflats.com') {
            return setValidationError(true);
        }
        if (pass !== 'senatorFlats!@#123') {
            return setValidationError(true);
        }

        dispatch(changeAuth(true));
        return navigate('/');
    };
    return (
        <div>
            <div className="register-page">
                <div className="form">
                    <h1>Register</h1>
                    {validationError && <span> The credentials are wrong</span>}
                    <form className="register-form">
                        <input type="text" placeholder="name"/>
                        <input type="text" placeholder="email address"/>
                        <input type="password" placeholder="password"/>
                        <button>create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
