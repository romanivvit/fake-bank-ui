import { useNavigate } from 'react-router-dom';
import mainBanner from '../../assets/img/main-banner.jpg';
import './styles.scss';

import 'swiper/css';
import 'swiper/css/pagination';

export const HomePage = () => {
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate('/login');
    };
    const handleNavigateReister = () => {
        navigate('/register');
    };

    return (
        <div className="main-wrapper">
                <div className="banner-text">
                    <h1>
                        Welcome To the Fake Bank
                    </h1>
                    <div className="auth-buttons">
                        <button id="main-book-button" onClick={handleNavigateLogin}>
                            Login
                        </button>
                        <button id="main-book-button" onClick={handleNavigateReister}>
                            Register
                        </button>
                    </div>
                </div>
                <div className="main-banner">
                    <img src={mainBanner} alt="" />
                </div>
            </div>
    );
};
