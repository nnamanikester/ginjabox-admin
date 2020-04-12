import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createStore } from "redux";
import { Provider } from "react-redux"
import { Provider as KeepAliveProvider } from "react-keep-alive";
import allReducers from "./Redux/reducers";

let store = createStore(allReducers);

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <KeepAliveProvider>
        <App />
      </KeepAliveProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
