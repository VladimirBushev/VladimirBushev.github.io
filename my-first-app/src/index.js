import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './Redux/redux-store'
import { Provider } from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


reportWebVitals();
