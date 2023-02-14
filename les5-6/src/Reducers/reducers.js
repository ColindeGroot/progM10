function myReducer(state, action){
    if (typeof state === "undefined"){
        state = "Colin";
        return state;
    }
    if(action.type === "TEST"){
        state = action.payload;
        return state;
    }
    return state;
}

export default myReducer;