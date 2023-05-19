import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import math from "mathjs";
import { Box, Button, Text } from "@radix-ui/react";
import { setDisplayValue, clearDisplay } from "./features/calculatorSlice.js"

const calculator = () => {
    const setDisplayValue = useSelector((state) => state.calculator);
    const dispatch = useDispatch();



    const expression = "2+ 3 + 4 * 0.1";
    const parsedExpression = math.parse(expression);
    const testResult = parsedExpression.evaluate();
    console.log(testResult);

}