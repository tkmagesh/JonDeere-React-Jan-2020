function bugsReducer(prevState, action){
    if (action.type === 'LOAD')
        return action.payload;
    if (action.type === 'ADD')
        return [...prevState, action.payload];
}
export default bugsReducer;