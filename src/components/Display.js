import React from "react";
import { useSelector } from "react-redux";

const Display = ({ displayed }) => {

    const expression = useSelector((state) => state.expression)
    const result = useSelector((state) => state.result)    

    return (
        <div id="display" className="col-span-4 bg-slate-950 text-right p-2 mb-2">
            <div className="expression text-slate-100"><span style={{visibility: "hidden"}}>0</span>{expression} 500 + 2 </div>
            <div className="result text-slate-100"><span style={{visibility: "hidden"}}>0</span>{result}= 502</div>
        </div>
    );
};

export default Display;