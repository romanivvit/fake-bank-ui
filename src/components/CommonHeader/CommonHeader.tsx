import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import mainLogo from '../../assets/img/main-logo.png';
import arrow from '../../assets/svg/arrow.svg';
import './styles.scss';

export const CommonHeader = () => {
    const { t } = useTranslation();

    return (
        <header id="common-header">
            <div className="navigation">
                <ul className="navigation-list">
                    <li className="active">
                        <Link to="/">{t('header.home')}</Link>
                    </li>
                    <li>
                        <Link to="/account">
                            Account
                        </Link>
                    </li>
                    <li>
                        <Link to="/transfer">
                            Transfer
                        </Link>
                    </li>
                    <li>
                        <Link to="/history">
                           Transfer History
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};
