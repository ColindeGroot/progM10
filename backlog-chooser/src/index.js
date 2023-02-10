import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
/* zorgt ervoor dat we naar de store kunnen schrijven en van de store kunnen lezen */
import { Provider } from 'react-redux';
import filteredCircuitReducer from '../src/reducers/filteredCiruictsReducer';
import App from './App/App';



/* store */
const store = createStore(filteredCircuitReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


