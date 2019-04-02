import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import configureStore from './redux/stores/configureStore'
import App from './App'

const store = configureStore({})

ReactDOM.render(
  <Provider  store={store}>
    <BrowserRouter basename='/forecast-app'>
      <App />
    </BrowserRouter>
  </Provider>,    
  document.getElementById('root')
);

module.hot.accept();