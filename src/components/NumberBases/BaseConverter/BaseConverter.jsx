import React, { useState } from 'react';
import { getBaseConversion } from '../../../utils/server';
import ExponentMethod from './ExponentMethod';
import QuotientMethod from './QuotientMethod';
import NumberBaseSymbolsAndValues from './NumberBaseSymbolsAndValues';

function BaseConverter () {
    const [inputValue, setValue] = useState('');
    const [fromBase, setFromBase] = useState('');
    const [toBase, setToBase] = useState('');
    const [output, setOutput] = useState({});
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setOutput({});
        getBaseConversion(inputValue, fromBase, toBase).then((convertedValue) => {
            setOutput(convertedValue);
        }).catch((err) => {
            setError(err.response.data.msg);
        });
    };

    const resetForm = () => {
        document.getElementById('base-converter').reset();
        setOutput({});
        setError('');
    };

    return (
        <div className="content relative-page dark-font light-page statement-font-size" style={{ paddingBottom: '1%' }}>
            <h2 className='text-align-center'><strong>Base Converter</strong></h2>
            <p className='text-align-center'>Enter your parameters below and press &#39;Calculate&#39;.</p>
            <form
                onSubmit={handleSubmit}
                id="base-converter"
                className="row justify-content-center my-3 rounded-box rounded-box-shadow dark-font center-item"
                style={{ width: '50%', padding: '2%' }}
            >
                <p className="text-danger text-center">{error}</p>
                <label htmlFor="start-value" className="form-label">Start value:</label>
                <div className="mb-4 input-group">
                    <span className="input-group-text">🚘</span>
                    <input
                        type="text"
                        className="form-control statement-font-size dark-font"
                        id="start-value"
                        placeholder="eg. 10"
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <label htmlFor="from-base" className="form-label">From base:</label>
                <div className="mb-4 input-group">
                    <span className="input-group-text">🏁</span>
                    <input
                        type="text"
                        className="form-control statement-font-size dark-font"
                        id="from-base"
                        placeholder="a number between 2 and 62..."
                        onChange={(e) => setFromBase(e.target.value)}
                    />
                </div>

                <label htmlFor="to-base" className="form-label">To base:</label>
                <div className="mb-4 input-group">
                    <span className="input-group-text">🏁</span>
                    <input
                        type="text"
                        className="form-control statement-font-size dark-font"
                        id="to-base"
                        placeholder="a number between 2 and 62..."
                        onChange={(e) => setToBase(e.target.value)}
                    />
                </div>

                <div className="mt-4 mb-0 text-center">
                    <button type="submit" className="btn btn-primary statement-font-size">
                    Calculate
                    </button>
                </div>
                <label htmlFor="end-value" className="form-label">End value:</label>
                <div className="mb-4 input-group">
                    <span className="input-group-text">🚖</span>
                    <input
                        disabled
                        type="text"
                        className="form-control statement-font-size dark-font"
                        id="end-value"
                        value={output.convertedValue}
                    />
                    <span className="input-group-text">
                        <i
                            title="Copy"
                            className="bi bi-back"
                            onClick={() => navigator.clipboard.writeText(output.convertedValue)}
                            onKeyDown={() => navigator.clipboard.writeText(output.convertedValue)}
                            style={{ cursor: 'pointer' }}
                            role="button"
                            tabIndex={0}
                            aria-label="End value copy button"
                        />
                    </span>
                </div>
            </form>
            <div className="mt-4 mb-0 text-center">
                <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-secondary text-center statement-font-size"
                >
        Reset
                </button>
            </div>
            <div>
            </div>
            {Object.keys(output).length === 0
                ? ''
                : <div>
                    <NumberBaseSymbolsAndValues />
                    <ExponentMethod
                        inputValue={inputValue}
                        fromBase={fromBase}
                        calculations={output.calculations.decimalCalculations}
                        result={output.calculations.decimalResult}
                    />
                    <QuotientMethod
                        inputValue={inputValue}
                        fromBase={fromBase}
                        toBase={toBase}
                        calculations={output.calculations.finalCalculations}
                        decimalResult={output.calculations.decimalResult}
                        finalResult={output.calculations.finalResult}/>
                </div>
            }

        </div>
    );
}
export default BaseConverter;
