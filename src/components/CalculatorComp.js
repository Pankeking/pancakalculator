import React from "react";

// import { Box, Button, Text } from "@radix-ui/react";

import Display from "./Display";
import Btn from "./Button";

const Calculator = () => {
    //const setDisplayValue = useSelector((state) => state.calculator.expression);
    //const dispatch = useDispatch();



   // const expression = "2+ 3 + 4 * 0.1";
   // const testResult = parsedExpression.evaluate();
   // console.log(testResult);

    return (
      <div className="calculator border-8 my-4 border-red-300 place-self-center mx-auto max-w-md p-8">
        <div className="grid grid-cols-4 gap-0">
          <Display />
          <Btn text="AC" idName="clear"    className="col-span-3 bg-indigo-500" />
          <Btn text="/"  idName="divide"   className="bg-yellow-500"/>
          <Btn text="7"  idName="seven"    className="bg-slate-600"/>
          <Btn text="8"  idName="eight"    className="bg-slate-600"/>
          <Btn text="9"  idName="nine"     className="bg-slate-600"/>
          <Btn text="*"  idName="multiply" className="bg-yellow-500"/>
          <Btn text="4"  idName="four"     className="bg-slate-600"/>
          <Btn text="5"  idName="five"     className="bg-slate-600"/>
          <Btn text="6"  idName="six"      className="bg-slate-600"/>
          <Btn text="-"  idName="subtract" className="bg-yellow-500"/>
          <Btn text="1"  idName="one"      className="bg-slate-600"/>
          <Btn text="2"  idName="two"      className="bg-slate-600"/>
          <Btn text="3"  idName="three"    className="bg-slate-600"/>
          <Btn text="+"  idName="add"      className="bg-yellow-500"/>
          <Btn text="0"  idName="zero"     className="col-span-2 row-span-1 bg-slate-600" />
          <Btn text="."  idName="decimal"  className="col-span-1 bg-green-400"/>
          <Btn text="="  idName="equals"   className="col-span-1 row-span-1 bg-red-500" />
        </div>
    </div>
    )
}

export default Calculator;