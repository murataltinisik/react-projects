import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// * REACT ROUTER 5.2.0
import { BrowserRouter } from 'react-router-dom';

// * REACT REDUX
import { Provider } from 'react-redux';
import rootReducers from './reducers/rootReducers'
import { configureStore } from '@reduxjs/toolkit';

// * THUNK & LOGGER
import thunk from "redux-thunk";
import logger from "redux-logger";
import reduxPromise from "redux-promise-middleware"


// * STORE
const store = configureStore({
    reducer: rootReducers,
    middleware: [reduxPromise(), thunk, logger],
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
