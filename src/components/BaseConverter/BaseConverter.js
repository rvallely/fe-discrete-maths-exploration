import React, { useState } from 'react';
import { getBaseConversion } from '../../utils/server';
import { Link } from 'react-router-dom';

function BaseConverter() {
    const [value, setValue] = useState('');
    const [fromBase, setFromBase] = useState('');
    const [toBase, setToBase] = useState('');
    const [result, setResult] = useState({});
    const [error, setError] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        getBaseConversion(value, fromBase, toBase).then((result) => {
            console.log('result: ', result)
            setResult(result);
        }).catch((err) => {
            console.log(JSON.stringify(err))
            console.log(Object.keys(err));
            console.log(err.message);
            console.log(err.code);
            setError(err.response.data.msg);
        });
    }

    const resetForm = () => {
        document.getElementById('base-converter').reset();
        setResult('');
    }

    return (  
        <div>
            <section id='base-converter-form'>
                <div className='container-lg'>
                    <div className='text-center'>
                        <h2>Base Converter</h2>
                        <p className='lead'>Enter your parameters below and press 'Calculate'.</p>
                    </div>
                    <p className='text-danger text-center'>{error}</p>
                    <div className='row justify-content-center my-3'>
                        <div className='col-lg-6'>
                            <form onSubmit={handleSubmit} id='base-converter'>
                                <label htmlFor='start-value' className='form-label'>Start value:</label>
                                <div className='mb-4 input-group'>
                                    <span className='input-group-text'>🚘</span>
                                    <input type='text' className='form-control' id='start-value' placeholder='eg. 10' onChange={(e) => setValue(e.target.value)}></input>    
                                </div>

                                <label htmlFor='from-base' className='form-label'>From base:</label>
                                <div className='mb-4 input-group'>
                                    <span className='input-group-text'>🏁</span>
                                    <input type='text' className='form-control' id='from-base' placeholder='a number between 2 and 62...' onChange={(e) => setFromBase(e.target.value)}></input>
                                </div>

                                <label htmlFor='to-base' className='form-label'>To base:</label>
                                <div className='mb-4 input-group'>
                                    <span className='input-group-text'>🏁</span>
                                    <input type='text' className='form-control' id='to-base' placeholder='a number between 2 and 62...' onChange={(e) => setToBase(e.target.value)}></input>
                                </div>

                                <div className='mt-4 mb-0 text-center'>
                                    <button type='submit' className='btn btn-primary'>
                                    Calculate
                                    </button>
                                </div>
                                <label htmlFor='end-value' className='form-label'>End value:</label>
                                <div className='mb-4 input-group'>
                                    <span className='input-group-text'>🚖</span>
                                    <input disabled={true} type='text' className='form-control' id='end-value' value={result.convertedValue}></input>
                                    <span className='input-group-text'>
                                    <i title='Copy' className="bi bi-back" onClick={() => navigator.clipboard.writeText(result)} style={{'cursor': 'pointer'}}></i>
                                    </span>
                                </div>    
                            </form>
                            <div className='mt-4 mb-0 text-center'>
                                <button onClick={resetForm} className='btn btn-secondary text-center'>Reset</button>
                            </div>
                            <div className='mt-4 mb-0 text-center'>
                                <Link to={`/base-converter/show-calculation?startVal=${value}&fromBase=${fromBase}&toBase=${toBase}&result=${result.convertedValue}`}  className='btn btn-success text-center' state={{calcs: result.calcs}}>Show Calculation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
 export default BaseConverter;