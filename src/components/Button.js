import React from "react";
import { useDispatch } from "react-redux";
import { updateExpression, updateResult, clearCalculator } from "../features/reducers.js";

const Btn = ({ text, className, idName }) => {

    let symbol = "";
    
    if (text === "/" || text === "*" || text === "+" || text === "-") {
        symbol = "operator";
    } else if (text === "AC") {
        symbol = "clear";
    } else if (text === ".") {
        symbol = "decimal";
    } else if (text === "=") {
        symbol = "equal";
    } else if (text === "1" || text === "2" || text === "3" || text === "4" || text === "5" || text === "6" || text === "7" || text === "8" || text === "9" || text === "0") {
        symbol = "number";
    }

    const dispatch = useDispatch();
    const handleClick = () => {
        switch(symbol) {
            case "clear":
                dispatch(clearCalculator());
                break;
            case "operator":
                dispatch(updateExpression(text))
                break;
            case "equal":
                dispatch(updateResult())
                break;
            case "number":
                dispatch(updateExpression(text))
                break;
            case "decimal":
                dispatch(updateExpression(text))
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
