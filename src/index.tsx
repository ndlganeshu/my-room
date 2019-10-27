import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp/TodoApp';
import './index.css';

import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
