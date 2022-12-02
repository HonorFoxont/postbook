import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import authReducer from './lib/context/store/authReducer';
import Providers from './lib/providers/Providers';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import reportWebVitals from './reportWebVitals';

const store = createStore(authReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Providers>
      <Provider store={store}>
        <App />
      </Provider>
    </Providers>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
