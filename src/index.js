import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
<Provider store={createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))}>
    <Router>
        <App/>
    </Router>
</Provider>, document.getElementById('root'));

