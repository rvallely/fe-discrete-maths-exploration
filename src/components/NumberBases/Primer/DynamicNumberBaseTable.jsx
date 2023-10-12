import React from 'react';

function DynamicNumberBaseTable ({ base }) {
    const chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
    const values = [];
    for (let i = 0; i < base; i++) {
        values.push(chars[i]);
    }
    return <div>
        <p
            className='what-is-discrete-math-math-branch-text statement-font-size statement-margins'
        >
            Symbols in the system: {JSON.stringify(values)}
        </p>
        <div style={{ backgroundColor: '#FDFFF4' }}><table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                    <th scope="col">#</th>
                    {values.map((value) => {
                        return <th key={value} scope="col">{value}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {values.map((value) => {
                    return <tr key={value}>
                        <th className="table-dark">{value}</th>
                        {values.map((innerValue) => {
                            return <td key={innerValue}>{value}{innerValue}</td>;
                        })}
                    </tr>;
                })}
            </tbody>
        </table></ div>
    </div>;
}

export default DynamicNumberBaseTable;
