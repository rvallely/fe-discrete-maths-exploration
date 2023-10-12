import React from 'react';

function QuotientMethod ({ inputValue, fromBase, toBase, calculations, decimalResult, finalResult }) {
    return (
        <div style={{ marginBottom: '2%' }}>
            <h2 className="text-decoration-underline text-align-center">Step 2</h2>
            <div
                className="center-item rounded-box"
                style={{
                    width: 'fit-content',
                    padding: '2%',
                    backgroundColor: 'white',
                    borderWidth: '2px',
                    borderColor: '#150e60'
                }}
            >
                <h3 style={{ marginBottom: '4%' }}><strong>Converting from a Decimal Number</strong></h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="table-active dark-font">Quotient</th>
                            <th className="table-active dark-font">Remainder</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calculations.map((calc) => (
                            <tr key={calc._id}>
                                <td className='dark-font'>
                                    {calc.val} / {calc.toBase} = {calc.newVal}
                                </td>
                                <td className='dark-font'>{calc.remainder}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="text-align-center" style={{ paddingTop: '2%' }}>
                    <strong>
                        {decimalResult}
                        <sub>{10}</sub>
                        {' '}
            =
                        {' '}
                        {finalResult}
                        <sub>{toBase}</sub>
                    </strong>
                </p>
            </div>
        </div>);
}

export default QuotientMethod;
