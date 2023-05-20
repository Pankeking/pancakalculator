// reducers.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expression: '',
  result: '',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    updateExpression: (state, action) => {
      state.expression = action.payload;
    },
    updateResult: (state, action) => {
      state.result = action.payload;
    },
    clearCalculator: (state) => {
      state.expression = '';
      state.result = '';
    },
  },
});

export const { updateExpression, updateResult, clearCalculator } = calculatorSlice.actions;
export default calculatorSlice.reducer;
