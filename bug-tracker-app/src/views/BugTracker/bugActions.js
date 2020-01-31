export function load(bugs){
    return { type: 'LOAD', payload: bugs };
}

export function add(newBug){
    return { type: 'ADD', payload : newBug }
}