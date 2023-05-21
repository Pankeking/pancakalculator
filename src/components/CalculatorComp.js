import React from "react";
// import { useSelector, useDispatch } from "react-redux"
// import math from "./mathjs";
// import { Box, Button, Text } from "@radix-ui/react";

import Display from "./Display";
import Btn from "./Button";

const Calculator = () => {
    //const setDisplayValue = useSelector((state) => state.calculator.expression);
    //const dispatch = useDispatch();



   // const expression = "2+ 3 + 4 * 0.1";
   // const parsedExpression = math.parse(expression);
   // const testResult = parsedExpression.evaluate();
   // console.log(testResult);

    return (
      <div className="calculator border-8 my-4 border-red-300 place-self-center mx-auto max-w-md p-8">
        <div className="grid grid-cols-4 gap-0">
          <Display />
          <Btn text="AC" id="clear"    className="col-span-3 bg-indigo-500" />
          <Btn text="/"  id="divide"   className="bg-yellow-500"/>
          <Btn text="7"  id="seven"    className="bg-slate-600"/>
          <Btn text="8"  id="eight"    className="bg-slate-600"/>
          <Btn text="9"  id="nine"     className="bg-slate-600"/>
          <Btn text="x"  id="multiply" className="bg-yellow-500"/>
          <Btn text="4"  id="four"     className="bg-slate-600"/>
          <Btn text="5"  id="five"     className="bg-slate-600"/>
          <Btn text="6"  id="six"      className="bg-slate-600"/>
          <Btn text="-"  id="subtract" className="bg-yellow-500"/>
          <Btn text="1"  id="one"      className="bg-slate-600"/>
          <Btn text="2"  id="two"      className="bg-slate-600"/>
          <Btn text="3"  id="three"    className="bg-slate-600"/>
          <Btn text="+"  id="sum"      className="bg-yellow-500"/>
          <Btn text="0"  id="zero"     className="col-span-2 row-span-1 bg-slate-600" />
          <Btn text="."  id="decimal"  className="col-span-1 bg-green-400"/>
          <Btn text="="  id="equals"   className="col-span-1 row-span-1 bg-red-500" />
        </div>
    </div>
    )
}

export default Calculator;