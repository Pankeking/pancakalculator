import React from "react";
import { useSelector } from "react-redux";


const Display = () => {

    const expression = useSelector((state) => state.calculator.expression)
    const result = useSelector((state) => state.calculator.result)    

    

    return (
        <div className="col-span-4 font-mono bg-slate-950 text-right p-2 mb-2">
            <div id="display" className="text-slate-100"><span style={{visibility: "hidden"}}>0</span>{expression}</div>
            <div className="text-red-300"><span style={{visibility: "hidden"}}>0</span>{result}</div>
        </div>
    );
};

export default Display;