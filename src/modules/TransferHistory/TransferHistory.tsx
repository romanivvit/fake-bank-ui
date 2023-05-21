import './styles.scss';
import {useSelector} from "react-redux";
import {useOperation} from "../../hooks/useOperation";
import {selectOperationsData} from "../../store/slices/operation";
import {useAppDispatch} from "../../store/hooks";
export const TransferHistoryPage = () => {
    const dispatch = useAppDispatch();
    const operationData = useSelector(selectOperationsData)

    useOperation();


    // "created_at": "2023-05-21T13:32:46.082Z",
    //     "operation_id": 0,
    //     "receiver_account_id": 0,
    //     "sender_account_id": 0,
    //     "value": 0
    return (
        <div className='transfer-page'>
            <h1>Transfer</h1>
            <div className="transfer-container">
                <div className="card">
                    <div className="login-form">
                        <table>
                            <caption>Statement Summary</caption>
                            <thead>
                            <tr>
                                <th scope="col">OperationId</th>
                                <th scope="col">Sender Account</th>
                                <th scope="col">Receiver Account</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Period</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                operationData && operationData.map((el)=>{
                                    return (
                                        <tr>
                                            <td data-label="Account">{el.operation_id}</td>
                                            <td data-label="Due Date">{el.sender_account_id}</td>
                                            <td data-label="Due Date">{el.receiver_account_id}</td>
                                            <td data-label="Amount">{el.value}</td>
                                            <td data-label="Period">{el.created_at}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
