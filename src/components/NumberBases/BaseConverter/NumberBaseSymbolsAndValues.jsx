import React from 'react';

function NumberBaseSymbolsAndValues () {
    const numberBaseSymbolsAndValues = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
        .reduce((acc, symbol, index) => {
            return [...acc, { symbol, value: index }];
        }, []);

    return <div>
        <h3 className='text-align-center' style={{ marginTop: '2%' }}><strong>Symbols and Values</strong></h3>
        <p
            className='text-align-center'
            style={{ marginLeft: '4%', marginRight: '4%' }}
        >
            In case your input or output contains a letter and you are confused as to
            what is happening, please see the table below, where the letter is simply
            substituted for its equivalent value<span>😉</span>.
        </p>
        <div
            className='center-item rounded-box'
            style={{ backgroundColor: 'white', overflowX: 'auto', width: '90%', marginBottom: '2%', padding: '2%' }}
        >
            <table style={{ width: '100%' }} className="table table-bordered">
                <tbody>
                    <tr>
                        <th className="table-dark" style={{ borderColor: 'white' }}>Symbol</th>
                        {numberBaseSymbolsAndValues.map(({ symbol }) => {
                            return <td key={symbol} className='table-light'>{symbol}</td>;
                        })}
                    </tr>
                    <tr>
                        <th className="table-dark" style={{ borderColor: 'white' }}>Value</th>
                        {numberBaseSymbolsAndValues.map((entry, index) => {
                            return <td key={index} className='table-light'>{index}</td>;
                        })}
                    </tr>
                </tbody>
            </table></div>
    </div>;
}

export default NumberBaseSymbolsAndValues;
