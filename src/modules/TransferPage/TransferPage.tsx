import './styles.scss';
import {FormEvent, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectUserId} from "../../store/slices/user";
import {useOperation} from "../../hooks/useOperation";
import {selectOperationState} from "../../store/slices/operation";
import {useAppDispatch} from "../../store/hooks";
export const TransferPage = () => {
    const dispatch = useAppDispatch();
    const userId = useSelector(selectUserId);
    const operationState = useSelector(selectOperationState)

    const {createOperation} = useOperation();
    const handleOperation = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

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
                        {
                            <h2>{operationState ?'Transfer done successfully' :'Transfer declined'}</h2>
                        }
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
