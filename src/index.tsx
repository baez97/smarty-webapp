import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './slices';

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

console.log('%cSmarty', 'padding-left:30%;font-family:Poppins;font-weight:800;font-size:33px');
console.log('%cJosé Manuel Báez', 'padding-left:30%; font-family:Poppins;font-size:14px');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
