// reducers.js

import { createSlice } from '@reduxjs/toolkit';
import * as math from "mathjs";



// Calculator

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    expression: "0",
    result: "0",
  },
  reducers: {
    updateExpression: (state, action) => {
        if(state.expression.length === 1 && state.expression[0] == 0) {
            state.expression = action.payload;
        } else {
            state.expression = state.expression.concat(action.payload);
        }
    },
    updateResult: (state) => {
        const parsedExpression = math.evaluate(state.expression);
        state.expression = parsedExpression.toString();
        state.result = parsedExpression.toString();
    },
    clearCalculator: (state) => {
      state.expression = '0';
      state.result = '0';
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



