import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'antd/dist/antd.css';
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 0,
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});
root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
        <Provider store={store}>
        <Layout>
            <App />
        </Layout>
        </Provider>
        </QueryClientProvider>
    </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
