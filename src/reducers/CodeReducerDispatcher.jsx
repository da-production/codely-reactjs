const CodeReducerDispatcher = (state, action) => {
    if(action.type === "UPDATE_SOURCECODE"){
        return {
            ...state,
            sourceCode: action.payload
        }
    }
    return state;
}

export default CodeReducerDispatcher;