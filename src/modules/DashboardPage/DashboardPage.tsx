import DetailsBanner from '../../assets/img/details-page.jpg';
import './style.scss';
import {useSelector} from "react-redux";
import {selectUserName} from "../../store/slices/user";
import {useAccount} from "../../hooks/useAccount";
import {selectAccountBalance} from "../../store/slices/account";
export const DashboardPage = () => {
    const userName = useSelector(selectUserName);
    const accountBalance = useSelector(selectAccountBalance);
    useAccount();

    return (
        <div className='details-page'>
            <img src={DetailsBanner} alt=""/>
            <div className='welcome-block'>
                <h1>Welcome to the Fake Community Bank</h1>
            </div>
            <div className='account-block'>
                <span>Account: {userName}</span>
                {accountBalance !== undefined && (<span>Balance: {accountBalance}$</span>)}
            </div>
        </div>
    )
}
