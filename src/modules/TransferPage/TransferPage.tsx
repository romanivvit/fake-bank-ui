import './styles.scss';
import {FormEvent} from "react";
import {useSelector} from "react-redux";
import {selectUserId} from "../../store/slices/user";
import {useOperation} from "../../hooks/useOperation";
export const TransferPage = () => {
    const userId = useSelector(selectUserId);

    const {createOperation} = useOperation();
    const handleOperation = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e);

        // @ts-ignore
        const data =
        {
            // @ts-ignore
            "receiver_account_id": e.target[0].value,
            "sender_account_id": userId,
            // @ts-ignore
            "value": e.target[1].value
        }
        await createOperation(data);
    }
    return (
        <div className='transfer-page'>
            <h1>Transfer</h1>
            <div className="transfer-container">
                <div className="card">
                    <form className="login-form" onSubmit={(e) => handleOperation(e)}>
                        <h2>Receiver Account ID</h2>
                        <input type="number" placeholder="Receiver Account ID"/>
                        <h2>Amount</h2>
                        <input id={'amount'} type="number" placeholder="Amount"/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
