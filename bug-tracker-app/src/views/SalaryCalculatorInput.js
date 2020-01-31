import React, { Component } from 'react';

class SalaryCalculatorInput extends Component {
    render = () => {
        const { labelText, onValueChange, type = 'number', ...attrs } = this.props;
        return (
            <div className="field">
                <label htmlFor="">{labelText}</label>
                <input type={type} defaultValue="0" {...attrs} onChange={evt => onValueChange(evt.target.valueAsNumber)} />
            </div>
        )
    }
}

export default SalaryCalculatorInput;