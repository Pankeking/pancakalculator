export const updateExpression = (expression) => ({
    type: "UPDATE_EXPRESSION",
    payload: expression,
})

export const updateResult = (result) => ({
    type: "UPDATE_RESULT",
    payload: result,
})

export const clearCalculator = () => ({
    type: "CLEAR_CALCULATOR"
})