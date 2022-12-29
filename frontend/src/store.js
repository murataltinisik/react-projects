import { configureStore, combineReducers } from '@reduxjs/toolkit';

function reducer() {
  return 'STATE';
}

const store = configureStore({
  reducer,
});

export default store;
