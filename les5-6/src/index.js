
import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore } from 'redux'

import { Provider } from 'react-redux';

import App from './App/App';
import myReducer from './Reducers/reducers';


const store = createStore(myReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

