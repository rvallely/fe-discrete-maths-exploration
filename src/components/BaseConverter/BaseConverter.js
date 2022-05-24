import React, { useState } from 'react';
import { getBaseConversion } from '../../utils/server';
import Result from './Result';


function BaseConverter() {
    const [value, setValue] = useState('');
    const [fromBase, setFromBase] = useState('');
    const [toBase, setToBase] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value, '<< value', fromBase, '<< fromBase', toBase, '<<< toBase')
        getBaseConversion(value, fromBase, toBase).then((result) => { 
            setResult(result);
            console.log(e);
            console.log(e.target);
            e.target.reset();
        }).catch((err) => {
            console.log(err.response.data.msg)
            setError(err);
        });
    }

    return (  
        <div>
        <section id='base-converter-form'>
            <div className='container-lg'>
                <div className='text-center'>
                    <h2>Base Converter</h2>
                    <p className='lead'>Enter your parameters below and press calculate.</p>
                </div>

                <div className='row justify-content-center my-5'>
                    <div className='col-lg-6'>
                        <form onSubmit={handleSubmit}>
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
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Result result={{result, setResult}}/>
        </div>
    )

    // if result is blank -- load blank form

    // form 
    // calculate button
    // functionality - contact backend
    // result
    // display dynamic calculation ∑  if time
    
}

export default BaseConverter;