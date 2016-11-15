import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducers from './reducers/rootReducers'
import AsyncMiddleware from './middlewares/async'

import App from './App';

const createStoreWithMiddlewares = applyMiddleware(AsyncMiddleware)(createStore)
const store = createStoreWithMiddlewares(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
