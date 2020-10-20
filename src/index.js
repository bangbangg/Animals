import React from 'react';
import {createStore, compose} from "redux";
import {render} from "react-dom";
import {Provider} from "react-redux";

import {App} from "./App"
import {rootReducer} from "./Reducers/rootReducer"
import * as serviceWorker from './serviceWorker';
import "./Styles/style.css"


const store = createStore(rootReducer , compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
  
const app = (
<Provider store = {store}>
  <App/>
</Provider>
)

render(
  app,
  document.getElementById('root')
);




serviceWorker.unregister();
