import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// * REACT REDUX
import store from './store';
import { Provider } from 'react-redux';

// * REACT ROUTER 5.2.0
import { BrowserRouter } from 'react-router-dom';

const action = {
  type: 'Change The State',
  payload: {
    newState: 'My New State',
  },
};

store.dispatch(action);

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
