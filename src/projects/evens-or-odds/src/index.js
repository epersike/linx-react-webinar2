import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import './index.css';

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log('store', store);

store.subscribe(() => console.log('store.getState()', store.getState()))

const EvensOrOdds = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default EvensOrOdds;
