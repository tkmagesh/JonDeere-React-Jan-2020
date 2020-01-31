
/*
class Greeter extends React.Component{

    state = { 
        message : '[Default greet message]',
    };
    userName = '';

    onGreetClick = () => {
        let greetMessage = `Hi ${this.userName}, ${this.props.greet}`;
        this.setState({message : greetMessage});
    }

    onTxtUserNameChange = (evt) => {
        //this.setState({ userName : evt.target.value });
        this.userName = evt.target.value;
    }

    render = () => {
        return(
            <div>
                <h1>Greeter</h1>
                <hr/>
                <label htmlFor="">User Name :</label>
                <input type="text" onChange={this.onTxtUserNameChange} />
                <input type="button" value="Greet" onClick={this.onGreetClick} />
                <div className="highlight">{this.state.message}</div>
            </div>
        )
    }
}
*/

import React, { useState } from 'react';

window['React'] = React;

const Greeter = (props) => {
    console.log(props);
    const [userName, setUserName] = useState('');
    /* 
    const arr = useState('[Default greet message]');
    const message = arr[0];
    const setMessage = arr[1]; 
    */

    const [message, setMessage] = useState('[Default greet message]');

    const onGreetClick = (evt) => {
        let greetMessage = `Hi ${userName}, ${props.greet}`;
        setMessage(greetMessage);
    }
    return (
        <div>
            <h1>Greeter</h1>
            <hr />
            <label htmlFor="">User Name :</label>
            <input type="text" onChange={ evt => setUserName(evt.target.value)} />
            <input type="button" value="Greet" onClick={onGreetClick} />
            <div className="highlight">{message}</div>
        </div>
    )
}

export default Greeter;