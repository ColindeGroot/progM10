const filteredCircuitsReducer = (state, action) => {
    if(state === undefined){
        return []; // niks meegeven als de state undefined is
    }
    if(action.type === "FILTEREDCIRCUIT"){
        return action.payload;
    }
    return state;
}

export default filteredCircuitsReducer;                                                                                                        