import React from "react";
import { useDispatch } from "react-redux";
import { updateExpression, updateResult, clearCalculator } from "../features/reducers.js";

const Btn = ({ text, className, idName, type }) => {

    const dispatch = useDispatch();
    const handleClick = () => {
        switch(type) {
            case "clear":
                dispatch(clearCalculator());
                break;
            case "operator":
                dispatch(updateExpression({text: text, type: type}))    
                break;
            case "value":
                dispatch(updateExpression({text: text, type: type}))    
                break;
            case "result":
                dispatch(updateResult())
                break;
            default:
                break;

        }
    }

    return (
        <button 
            id={idName}
            className={`bg-gray-300 py-2 text-center font-black font-mono cursor-pointer border-8 opacity-75 hover:opacity-100 rounded-full ${className}`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default Btn;
