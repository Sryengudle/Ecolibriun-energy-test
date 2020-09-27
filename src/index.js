import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import App from './containers/App';
import * as formReducers from './Reducers';

const rootReducer = combineReducers(Object.assign({}, formReducers));

const enhancer = compose(applyMiddleware(thunkMiddleware),);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

