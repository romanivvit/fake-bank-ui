import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import CommonHeader from '../CommonHeader';
import {useSelector} from "react-redux";
import {selectAuthStatus} from "../../store/slices/auth";

type TLayoutProps = {
    children:ReactNode
};
const Layout = ({ children }:TLayoutProps) => {
    const location = useLocation();
    const isAuthenticated = useSelector(selectAuthStatus);
    const mainPage = location.pathname === '/';
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
    return (
        <>
            {!isAuthPage ? mainPage && !isAuthenticated ? <Header /> : <CommonHeader /> : null}
            {children}
        </>
    );
};

export default Layout;
