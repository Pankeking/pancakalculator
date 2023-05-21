import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer, extraReducer } from "./reducers";

const rootReducer = {
    calculator: calculatorReducer,
    extra: extraReducer,
}

const store = configureStore({
    reducer: rootReducer
})
export default store;