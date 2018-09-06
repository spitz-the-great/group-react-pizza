import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const cart = (state = {}, action) => {
    if (action.type === 'ADD_PIZZAS') {
        // SelectPage logic here


    } else if (action.type === 'ADD_CUSTOMER') {
        // CustomerPage logic here


    } else if (action.type === 'EMPTY_CART') {
        // CheckoutPage logic here


    }
    return state;
}

const storeInstance = createStore(
    combineReducers({cart}),
    applyMiddleware(logger);
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
