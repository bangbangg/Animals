import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { App } from './App';
import { rootReducer } from './Reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
import './Styles/style.scss';

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('root'));
serviceWorker.unregister();
