import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: "calculator",
    initialState: "",
    reducers: {
        setDisplayValue: (state, action) => {
            state = action.payload;
            return state;
        },
        clearDisplay: (state, action) => {
            state = "";
            return state;
        },
    },
})

export const {setDisplayValue, clearDisplay} = calculatorSlice.actions;
export default calculatorSlice.reducer;