import './styles.scss'
import {useSelector} from "react-redux";
import {selectUserId, selectUserName} from "../../store/slices/user";
import {selectAccountBalance, selectAccountId} from "../../store/slices/account";
import {FormEvent} from "react";
import {useAccount} from "../../hooks/useAccount";
export const AccountPage = () => {
    const userName = useSelector(selectUserName);
    const userId = useSelector(selectUserId);
    const accountBalance = useSelector(selectAccountBalance);
    const accountId = useSelector(selectAccountId);

    const {createAccount}=useAccount()

    const handleCreateAccount = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            // @ts-ignore
            "initial_amount": e.target?.amount.value,
            "user_id": userId!
        }
        await createAccount(data)
    }
    if (accountId === undefined || accountBalance === undefined){
        return(
            <div className='createAccount'>
                <h1>Create Account</h1>
                <div className="transfer-container">
                    <div className="card">
                        <form className="login-form" onSubmit={(e) => handleCreateAccount(e)}>
                            <h2>Initial Amount</h2>
                            <input id={'amount'} type="number" placeholder="Amount"/>
                            <button type="submit">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='account-page'>
            <h1>Account</h1>
            <div className="account-container">
                <div className="card">
                    <h2>Checking Account {accountId}</h2>
                    <h2>Account Holder - {userName}</h2>
                    <span>Track your finances like a boss</span>

                    <h1>${accountBalance}</h1>
                    <p>Current Balance</p>

                    <div className="card-details">
                        <div className="card-section">
                            <h4>Previous Week</h4>
                            <span>${accountBalance}</span>
                        </div>
                        <div className="card-section">
                            <h4>Today's Balance</h4>
                            <span>${accountBalance}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
