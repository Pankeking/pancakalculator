import React from "react";
import { useDispatch } from "react-redux";
import { updateExpression, updateResult, clearCalculator } from "../features/reducers.js";

const Btn = ({ text, className }) => {
    
    const dispatch = useDispatch();
    const handleClick = () => {
        if (text == "AC") {
            dispatch(updateResult(100));
        } else {
            dispatch(updateExpression(text))
        }
    }

    return (
        <button 
            className={`bg-gray-300 py-2 text-center font-black font-mono cursor-pointer border-8 opacity-75 hover:opacity-100 rounded-full ${className}`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default Btn;
