import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { App } from './App';
import { loadState, saveState } from './Helpers/localStorage';
import { rootReducer } from './Reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
import './Styles/style.scss';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  saveState(store.getState());
});

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('root'));
serviceWorker.unregister();
