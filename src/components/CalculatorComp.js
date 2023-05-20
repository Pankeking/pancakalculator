import React from "react";
// import { useSelector, useDispatch } from "react-redux"
// import math from "./mathjs";
// import { Box, Button, Text } from "@radix-ui/react";

import Display from "./Display";
import Btn from "./Button";

const Calculator = () => {
    //const setDisplayValue = useSelector((state) => state.calculator);
    //const dispatch = useDispatch();



   // const expression = "2+ 3 + 4 * 0.1";
   // const parsedExpression = math.parse(expression);
   // const testResult = parsedExpression.evaluate();
   // console.log(testResult);

    return (
      <div className="calculator place-self-center mx-auto max-w-md p-8">
        <div className="grid grid-cols-4 gap-0">
          <Display />
          <Btn text="AC" id="clear"    className="col-span-3 bg-indigo-500" />
          <Btn text="/"  id="divide"   className="operator-btn"/>
          <Btn text="7"  id="seven"    className="number-btn"/>
          <Btn text="8"  id="eight"    className="number-btn"/>
          <Btn text="9"  id="nine"     className="number-btn"/>
          <Btn text="x"  id="multiply" className="operator-btn"/>
          <Btn text="4"  id="four"     className="number-btn"/>
          <Btn text="5"  id="five"     className="number-btn"/>
          <Btn text="6"  id="six"      className="number-btn"/>
          <Btn text="-"  id="subtract" className="operator-btn"/>
          <Btn text="1"  id="one"      className="number-btn"/>
          <Btn text="2"  id="two"      className="number-btn"/>
          <Btn text="3"  id="three"    className="number-btn"/>
          <Btn text="+"  id="sum"      className="operator-btn"/>
          <Btn text="0"  id="zero"     className="col-span-2 row-span-1 number-btn" />
          <Btn text="."  id="decimal"  className="col-span-1 bg-green-400"/>
          <Btn text="="  id="equals"   className="col-span-1 row-span-1 bg-red-500" />
        </div>
    </div>
    )
}

export default Calculator;