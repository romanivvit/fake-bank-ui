import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import mainLogo from '../../assets/img/main-logo.png';
import arrow from '../../assets/svg/arrow.svg';
import './styles.scss';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header id="header">
            <div className="navigation">
                <ul className="navigation-list">
                    <li className="active">
                        <Link to="/">{t('header.home')}</Link>
                    </li>
                    <li>
                        <Link to="/login">
                           Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                           Register
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};
