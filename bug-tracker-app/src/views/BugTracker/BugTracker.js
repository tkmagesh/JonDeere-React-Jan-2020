import React , { useEffect } from 'react';
import './BugTracker.css';
import useBugs from './useBugs';
import BugEdit from './BugEdit';


const BugTracker = () => {

    const [bugs, loadBugs, addNew ] = useBugs();
    const bugItems = bugs.map(bug => (
        <li key={bug.id}>
            <span>{bug.name}</span>
            <div id="datetime">{bug.createdAt}</div>
        </li>
    ) );
    
    useEffect(() => loadBugs())
    return (
        <div>
            <h3>Bug Tracker</h3>
            <hr />
            <div>{bugs.length}</div>
            <BugEdit addNew={addNew} />
            <ol>
                {bugItems}
            </ol>
        </div>
    );
}


export default BugTracker;