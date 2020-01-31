import React, { Component, useState } from 'react';
import './BugTracker.css';
import useBugs from './useBugs';



const BugTracker = () => {
    
    const [newBugName, setNewBugName] = useState('');
    const [bugs, loadBugs, addNew ] = useBugs();

    const bugItems = bugs.map(bug => (
        <li key={bug.id}>
            <span>{bug.name}</span>
            <div id="datetime">{bug.createdAt}</div>
        </li>
    ) );

    return (
        <div>
            <h3>Bug Tracker</h3>
            <hr />
            <input type="button" value="Load" onClick={loadBugs} />
            <div>{bugs.length}</div>
            <section className="edit">
                <label htmlFor="">Bug Name :</label>
                <input type="text" onChange={evt => setNewBugName(evt.target.value)}  />
                <input type="button" value="Add new" onClick={() => addNew(newBugName)} />
            </section>
            <ol>
                {bugItems}
            </ol>
        </div>
    );
}


export default BugTracker;