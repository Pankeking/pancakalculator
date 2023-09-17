import React from "react";
import { useDispatch } from "react-redux";
import { updateExpression, updateResult, clearCalculator } from "../features/reducers";

// import { Box, Button, Text } from "@radix-ui/react";

import Display from "./Display";
import Btn from "./Button";

const Calculator = () => {


    return (
      <div className="calculator border-8 my-4 border-red-300 place-self-center mx-auto max-w-md p-8">
        <div className="grid grid-cols-4 gap-0">
          <Display />
          <Btn text="AC" type="clear"     idName="clear"    className="col-span-3 bg-indigo-500" />
          <Btn text="/"  type="operator"  idName="divide"   className="bg-yellow-500"/>
          <Btn text="7"  type="number"    idName="seven"    className="bg-slate-600"/>
          <Btn text="8"  type="number"    idName="eight"    className="bg-slate-600"/>
          <Btn text="9"  type="number"    idName="nine"     className="bg-slate-600"/>
          <Btn text="*"  type="operator"  idName="multiply" className="bg-yellow-500"/>
          <Btn text="4"  type="number"    idName="four"     className="bg-slate-600"/>
          <Btn text="5"  type="number"    idName="five"     className="bg-slate-600"/>
          <Btn text="6"  type="number"    idName="six"      className="bg-slate-600"/>
          <Btn text="-"  type="operator"  idName="subtract" className="bg-yellow-500"/>
          <Btn text="1"  type="number"    idName="one"      className="bg-slate-600"/>
          <Btn text="2"  type="number"    idName="two"      className="bg-slate-600"/>
          <Btn text="3"  type="number"    idName="three"    className="bg-slate-600"/>
          <Btn text="+"  type="operator"  idName="add"      className="bg-yellow-500"/>
          <Btn text="0"  type="number"    idName="zero"     className="col-span-2 row-span-1 bg-slate-600" />
          <Btn text="."  type="decimal"   idName="decimal"  className="col-span-1 bg-green-400"/>
          <Btn text="="  type="result"    idName="equals"   className="col-span-1 row-span-1 bg-red-500" />
        </div>
    </div>
    )
}

export default Calculator;