const initialState = {
    expression: "",
    result: "",
};

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_EXPRESSION":
            return {
                ...state,
                expression: action.payload,
            }
        case "UPDATE_RESULT":
            return {
                ...state,
                result: action.payload,
            }
        case "CLEAR_CALCULATOR":
            return {
                ...initialState,
            }                
        default: 
            return state;
    }
}

export default calculatorReducer;