import React, { Component } from 'react';
import './SalaryCalculator.css';
import SalaryCalculatorInput from './SalaryCalculatorInput';
import SalaryCalculatorResult from './SalaryCalculatorResult'

class SalaryCalculator extends Component {
    state = {
        basic: 0,
        hra: 0,
        da: 0,
        tax: 0,
        salary: 0
    };

    onBtnCalculateClick = () => {
        const { basic, hra, da, tax, salary } = this.state;
        let gross = basic + hra + da;
        let net = gross * ((100 - tax) / 100);
        this.setState({ salary: net });
    }
    render = () => {
        const data = this.state;
        return (
            <section>
                <SalaryCalculatorInput labelText="Basic :" onValueChange={value => this.setState({ basic: value })} />
                <SalaryCalculatorInput labelText="HRA :" onValueChange={value => this.setState({ hra: value })} />
                <SalaryCalculatorInput labelText="DA :" onValueChange={value => this.setState({ da: value })} />
                <SalaryCalculatorInput labelText="Tax :" type="range" min="0" max="30" onValueChange={value => this.setState({ tax: value })} />
                <div className="field">
                    <input type="button" value="Calculate" id="btnCalculate" onClick={this.onBtnCalculateClick} />
                </div>
                <SalaryCalculatorResult data={data} />
            </section>
        )
    }
}

export default SalaryCalculator;