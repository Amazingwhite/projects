import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/redux_store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


  ReactDOM.render(

    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>, document.getElementById('root'));

// renderEntireTree(store.getState());
serviceWorker.unregister();




