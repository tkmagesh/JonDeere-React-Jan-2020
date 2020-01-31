import { useReducer } from 'react';
import bugsReducer from './bugsReducer';
import * as bugApi from './bugApi'
import * as bugActions from './bugActions';

function useBugs(initialState = []){
    const [bugs, bugsDispatcher] = useReducer(bugsReducer, initialState);

    function loadBugs(){
        bugApi
            .getAll()
            .then(bugs => {
                let loadAction = bugActions.load(bugs)
                bugsDispatcher(loadAction);
            });
    }

    function addNew(newBugName){
        bugApi
            .addNew(newBugName)
            .then(newBug => {
                const addNewBugAction = bugActions.add(newBug);
                bugsDispatcher(addNewBugAction);
            });
    }
    return [bugs, loadBugs, addNew];
}

export default useBugs;