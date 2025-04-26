// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './counterSlice';

// Configure the Redux store with reducers
const store = configureStore({
  reducer: {
    // counter: counterReducer, // Adding the counterSlice reducer
  },
});

export default store;

// Export RootState and AppDispatch for type-safety
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
