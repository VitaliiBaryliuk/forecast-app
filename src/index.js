import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import configureStore from './redux/stores/configureStore'
import App from './App'
// import Forecast from './components/Forecast/index'

const store = configureStore({})

ReactDOM.render(
  <Provider  store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,    
  document.getElementById('app')
);

module.hot.accept();