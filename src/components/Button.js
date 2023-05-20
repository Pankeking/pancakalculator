import React from "react";
import { useDispatch } from "react-redux";
import { updateExpression, updateResult } from "../features/actions.js";

const Btn = ({ text, className }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        //dispatch(updateExpression(label))
        //dispatch(updateResult(value))
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
