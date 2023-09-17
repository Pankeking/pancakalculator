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
        // Todo: Use Dijkstra's two stack algorithm
            const stateLength = state.expression.length;
            const lastChar = state.expression[stateLength - 1];
            const lastIsOperator = /[+*/]/.test(lastChar);
            const payloadOperator = /[+*/]/.test(action.payload)

            let values = [];
            let operators = [];


            if(stateLength === 1 && lastChar === "0") {
                state.expression = action.payload;
            } else if (payloadOperator && lastIsOperator) {
                state.expression = state.expression.slice(0, -1).concat(action.payload);
            } else if (/[-]$/.test(lastChar) && /[+*/]/.test(action.payload)) {
                state.expression = state.expression.replace(/[+*/-]+$/, action.payload);
            } else if (/\d+[.]\d+$/.test(state.expression) && /[.]/.test(action.payload)) {
                return;
            } else if (/[.]/.test(lastChar) && /[.]/.test(action.payload)) {
                return
            } else {
                state.expression = state.expression.concat(action.payload);
            }
        },
        updateResult: (state) => {
            const stateLength = state.expression.length;
            let lastChar = state.expression[stateLength - 1];
            if (/[+*/-]/.test(lastChar)) {
                state.result = "undefined";
            } else {
                const parsedExpression = math.evaluate(state.expression);
                state.expression = parsedExpression.toString();
                state.result = parsedExpression.toString();
            }
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



