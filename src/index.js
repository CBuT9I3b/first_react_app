import React from 'react';
import { render } from 'react-dom';
import { App } from './containers';
import { Provider } from 'react-redux';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = configureStore();

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
