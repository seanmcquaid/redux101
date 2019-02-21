import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the store from redux so we can use it 
// the store is redux

import {createStore} from "redux";

// import the provider component from react-redux so that react and redux can talk through connect 
// but the provider component makes it happen

import {Provider} from "react-redux";

// we need a master/root reducer to give to the store

// idnex = master reducer
import reducers from "./reducers/index"

// make a store for redux to use, pass it reducers , whcih is the export of the rootreducer
// file. the root reducer is just all the little reducers returns

const theStore = createStore(reducers);

// provider is the component that makes connect work
// connect is inside the containers 
// it takes a prop of store, which is the reduxStore
// the redux store was made by createStore and giving it the rootReducer

ReactDOM.render(
    <Provider store={theStore}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);