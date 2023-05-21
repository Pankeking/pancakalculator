import React from "react";
import { useSelector } from "react-redux";


const Display = () => {

    const expression = useSelector((state) => state.calculator.expression)
    const result = useSelector((state) => state.calculator.result)    

    

    return (
        <div id="display" className="col-span-4 bg-slate-950 text-right p-2 mb-2">
            <div className="text-slate-100">Expression: <span style={{visibility: "hidden"}}>0</span>{expression}</div>
            <div className="text-slate-100">Result: <span style={{visibility: "hidden"}}>0</span>{result}</div>
        </div>
    );
};

export default Display;