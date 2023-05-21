// reducers.js

import { configureStore, createSlice } from '@reduxjs/toolkit';
import * as math from "mathjs";



// Calculator

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    expression: "",
    result: "",
  },
  reducers: {
    updateExpression: (state, action) => {
      state.expression = state.expression.concat(action.payload);
    },
    updateResult: (state) => {
        const parsedExpression = math.evaluate(state.expression);
        state.result = parsedExpression.toString();
    },
    clearCalculator: (state) => {
      state.expression = '';
      state.result = '';
    },
  },
});

// Test extra reducer


const extraSlice = createSlice({
    name: "extra",
    initialState: {
        extra: ""
    },
    reducers: {
        displayExtra: (state, action) => {
            // state.extra = state.extra.concat(state.extra);
        }
    }
})
export const extraReducer = extraSlice.reducer;
export const { displayExtra } = extraSlice.actions; 



export const { updateExpression, updateResult, clearCalculator } = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;



