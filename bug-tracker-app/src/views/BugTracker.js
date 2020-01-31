import React, { Component, useReducer, useState } from 'react';
import './BugTracker.css';
import axios from 'axios';

function bugsReducer(prevState, action){
    if (action.type === 'LOAD')
        return action.payload;
    if (action.type === 'ADD')
        return [...prevState, action.payload];
}

const BugTracker = () => {
    const [bugs, bugsDispatcher] = useReducer(bugsReducer, []);
    const [newBugName, setNewBugName] = useState('');

    const onLoadClick = () => {
        axios.get('http://localhost:3030/bugs')
            .then(response => response.data)
            .then(bugs => bugsDispatcher({ type : 'LOAD', payload : bugs}));
    };
    
    const bugItems = bugs.map(bug => (
        <li key={bug.id}>
            <span>{bug.name}</span>
            <div id="datetime">{bug.createdAt}</div>
        </li>
    ) );

    const onBtnAddNewClick = () => {
        const newBugData = { 
            id : 0,
            name : newBugName,
            createdAt : new Date(),
            desc : 'Excepteur enim fugiat laboris sit anim. Consectetur excepteur officia labore incididunt cupidatat cillum ex veniam reprehenderit sit velit. Labore nisi fugiat anim non ut elit id. Labore commodo officia esse excepteur enim commodo aliquip. Et ea laboris veniam anim pariatur nostrud ex reprehenderit dolor. Aliqua Lorem voluptate in exercitation ipsum commodo velit eiusmod velit deserunt sunt do dolor sunt. Irure laborum minim anim occaecat proident exercitation nisi aute id Lorem.'
        };
        axios.post('http://localhost:3030/bugs', newBugData)
            .then(response => response.data)
            .then(newBug => {
                const addNewBugAction = { type : 'ADD', payload : newBug};
                bugsDispatcher(addNewBugAction);
            });
    }

    return (
        <div>
            <h3>Bug Tracker</h3>
            <hr />
            <input type="button" value="Load" onClick={onLoadClick} />
            <div>{bugs.length}</div>
            <section className="edit">
                <label htmlFor="">Bug Name :</label>
                <input type="text" onChange={evt => setNewBugName(evt.target.value)}  />
                <input type="button" value="Add new" onClick={onBtnAddNewClick} />
            </section>
            <ol>
                {bugItems}
            </ol>
        </div>
    );
}


export default BugTracker;