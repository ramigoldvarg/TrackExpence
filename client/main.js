import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './app.js';
import rootReducer from './reducers/reducer_root.js';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});