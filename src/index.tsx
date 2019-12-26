import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

import ReactDOM from 'react-dom';
import './index.css';
// import TodoApp from './components/TodoApp/TodoApp';
import Room from './Room';

import store from './redux/store';

ReactDOM.render(
  // tslint:disable-next-line:jsx-wrap-multiline
  <Provider store={store}>
    <Room />
  </Provider>,
  document.getElementById('root')
);
