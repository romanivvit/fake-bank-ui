import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './modules/HomePage';
import DashboardPage from './modules/DashboardPage';
import LoginPage from "./modules/LoginPage";
import {useSelector} from "react-redux";
import {selectAuthStatus} from "./store/slices/auth";
import NotFound from "./modules/NotFound";
import {RegisterPage} from "./modules/RegisterPage/RegisterPage";
import AccountPage from "./modules/AccountPage";
import TransferPage from "./modules/TransferPage";

function App() {
    const isAuthenticated = useSelector(selectAuthStatus);
    return (
        <div className="App">
            <Routes>
                {!isAuthenticated && <Route path="/" element={<HomePage />} />}
                {!isAuthenticated && <Route path="/login" element={<LoginPage />} />}
                {!isAuthenticated && <Route path="/register" element={<RegisterPage />} />}
                {isAuthenticated && <Route path="/" element={<DashboardPage />} />}
                {isAuthenticated && <Route path="/account" element={<AccountPage />} />}
                {isAuthenticated && <Route path="/transfer" element={<TransferPage />} />}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
