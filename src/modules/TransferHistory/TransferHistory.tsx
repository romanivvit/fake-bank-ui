import './styles.scss';
import {useSelector} from "react-redux";
import {useOperation} from "../../hooks/useOperation";
import {selectOperationsData} from "../../store/slices/operation";
export const TransferHistoryPage = () => {
    const operationData = useSelector(selectOperationsData)

    useOperation();

    return (
        <div className='transfer-page'>
            <h1>Transfer History</h1>
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
