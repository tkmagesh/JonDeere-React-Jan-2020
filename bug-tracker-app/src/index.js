import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import SalaryCalculator from './views/SalaryCalculator';
import Greeter from './views/Greeter';

//import * as calculator from './calculator';
//const add = calculator.add;

//const { add } = calculator;
//console.log(calculator);

//import { add } from './calculator';

//importing default export
//import xyz from './calculator';
//console.log(xyz);

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <div>
        <Greeter greet="Have a great day!"/>
        <hr/>
        <SalaryCalculator/>
    </div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();