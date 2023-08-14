import React, { useState } from 'react';
import SortingAlgorithmProcess from './SortingAlgorithmProcess';
import { useEffect } from 'react';

function SortingAlgorithm({endpoint, sortingAlgorithmName, sortingAlgorithmDescription, sortingAlgorithmVideo}) {
    const [unsortedNumbers, setUnsortedNumbers] = useState('');
    const [sortedNumberList, setSortedNumberList] = useState('');
    const [timeTaken, setTimeTaken] = useState('');
    const [sortingSteps, setSortingSteps] = useState([]);
    const [error, setError] = useState(null);
    const [sortingProcessVisible, setSortingProcessVisible] = useState(true);
    const [inputListSize, setInputListSize] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const unorderedNumberList = unsortedNumbers.replace(' ', '').split(',').map(num => Number(num))
        endpoint(unorderedNumberList).then((data) => {     
            const {
                unsortedList,
                sortedList,
                inputSize,
                executionTimeMs,
                iterations,
            } = data.data;

            setSortedNumberList(sortedList);
            setSortingSteps(iterations);
            setTimeTaken(`${executionTimeMs} ms`);
            setSortingProcessVisible(true);
            setInputListSize(inputSize)
        }).catch((err) => {
            setError(err?.response?.data.msg);
        });
    }

    const resetForm = () => {
        document.getElementById('list-sorter').reset();
        setSortedNumberList('');
        setTimeTaken('');
        setSortingProcessVisible(false);
    }

    useEffect(() => {
        //
    }, [sortedNumberList, sortingProcessVisible])
    return (  
        <div>
            <section id='number-list-sorting-form'>
                <div className='container-lg' style={{border: 'solid', 'border-color':'orange'}}>
                    <div className='text-center'>
                        <h2>{sortingAlgorithmName}</h2>
                        <p className='lead'>{sortingAlgorithmDescription}</p>
                        <video src={sortingAlgorithmVideo} width="600" height="300" controls="controls" autoPlay={true} />
                    </div>
                    <p className='text-danger text-center'>{error}</p>
                        <form onSubmit={handleSubmit} id='list-sorter' className='row justify-content-center my-3' style={{border: 'solid', 'border-color':'green'}}>
                            <div className='col-lg-6' style={{border: 'solid', 'border-color':'purple'}}>
                                <label htmlFor='start-value' className='form-label'>Please input a list of numbers delineated by commas: </label>
                                <div className='mb-4 input-group'>
                                    <span className='input-group-text'>🙃</span>
                                    <input type='text' className='form-control' id='unsorted-list' placeholder='eg. 2, 10, 9, 6, 8, 1' onChange={(e) => setUnsortedNumbers(e.target.value)}></input>    
                                </div>

                                <div className='mt-4 mb-0 text-center'>
                                    <button type='submit' className='btn btn-primary'>
                                    Sort
                                    </button>
                                </div>
                                <label htmlFor='end-value' className='form-label'>Sorted list:</label>
                                <div className='mb-4 input-group'>
                                    <span className='input-group-text'>🙂</span>
                                    <input disabled={true} type='text' className='form-control' id='end-value' value={sortedNumberList}></input>
                                    <span className='input-group-text'>
                                    <i title='Copy' className="bi bi-back" onClick={() => navigator.clipboard.writeText(sortedNumberList)} style={{'cursor': 'pointer'}}></i>
                                    </span>
                                </div>
                                <label htmlFor='input-size' className='form-label'>Input size::</label>
                                <div className='mb-4 input-group'>
                                    <span className='input-group-text'>📏</span>
                                    <input disabled={true} type='text' className='form-control' id='input-size' value={inputListSize}></input>
                                    <span className='input-group-text'>
                                    <i title='Copy' className="bi bi-back" onClick={() => navigator.clipboard.writeText(inputListSize)} style={{'cursor': 'pointer'}}></i>
                                    </span>
                                </div>    
                                <label htmlFor='time-taken' className='form-label'>Time taken:</label>
                                <div className='mb-4 input-group'>
                                    <span className='input-group-text'>⌚</span>
                                    <input disabled={true} type='text' className='form-control' id='time-taken' value={timeTaken}></input>
                                    <span className='input-group-text'>
                                    <i title='Copy' className="bi bi-back" onClick={() => navigator.clipboard.writeText(timeTaken)} style={{'cursor': 'pointer'}}></i>
                                    </span>
                                </div>
                            </div>
                            <div id='sorting-algorithm-process' className={sortingProcessVisible ? 'open': 'closed'}>
                                {SortingAlgorithmProcess(
                                    sortingAlgorithmName,
                                    unsortedNumbers.replace(' ', '').split(',').map(num => Number(num)),
                                    sortingSteps,
                                    sortedNumberList,
                                    )}
                            </div>
                        </form>
                        <div className='mt-4 mb-0 text-center'>
                            <button onClick={resetForm} className='btn btn-secondary text-center mb-2'>Reset</button>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default SortingAlgorithm;
