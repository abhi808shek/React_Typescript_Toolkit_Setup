// src/store/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface CounterState {
  value: number;
}

// Define the initial state
const initialState: CounterState = {
  value: 0,
};

// Create the slice using Redux Toolkit's createSlice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, setValue } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
