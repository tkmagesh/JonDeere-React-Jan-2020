import React from 'react';

const SalaryCalculatorResult = (props) => {
    console.log('render triggered');
    const { basic, hra, da, tax, salary } = props.data;
    const salaryEle = salary < 10000 ? (<td className='poorSalary'>{salary}</td>) : (<td className='goodSalary'>{salary}</td>);
    return (
        <div className="field">
            <table>
                <tbody>
                    <tr>
                        <td>{basic}</td>
                        <td>{hra}</td>
                        <td>{da}</td>
                        <td>{tax}</td>
                        {salary <= 0 ? null : salaryEle}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default SalaryCalculatorResult;