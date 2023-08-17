import React, { useState } from 'react';
import SortingAlgorithmProcess from './SortingAlgorithmProcess';
import { useEffect } from 'react';

function SortingAlgorithm({endpoint, sortingAlgorithmName, sortingAlgorithmDescription, sortingAlgorithmVideo}) {
    console.log(sortingAlgorithmName, '<<< sortingAlgorithmName');
    const [unsortedNumberList, setUnsortedNumberList] = useState('');
    const [error, setError] = useState(null);
    const [sortingProcessVisible, setSortingProcessVisible] = useState(false);
    const [sortingAlgoName, setSortingAlgoName] = useState(sortingAlgorithmName);

    const [returnedApiData, setReturnedApiData] = useState({
        unsortedList: '',
        sortedList: '',
        executionTimeMs: '',
        iterations: [],
        inputSize: '',
    });
    // const [sortedNumberList, setSortedNumberList] = useState('');
    // const [timeTaken, setTimeTaken] = useState('');
    // const [sortingSteps, setSortingSteps] = useState([]);
    
    if (sortingAlgorithmName !== sortingAlgoName) {
        console.log('reload page');
        setSortingAlgoName(sortingAlgorithmName);
        setUnsortedNumberList('');
        setReturnedApiData({
            unsortedList: '',
            sortedList: '',
            executionTimeMs: '',
            iterations: [],
            inputSize: '',
        });
        setSortingProcessVisible(false);
    }

    console.log('State: ', {
        unsortedNumberList, 
        // sortedNumberList,
        // timeTaken,
        // sortingSteps,
        error,
        sortingProcessVisible,
        sortingAlgoName,
    });

    const handleSubmit = (e) => {
        console.log('handling submit - endpoint ', endpoint)
        e.preventDefault();
        setError('');
        const unorderedNumberList = unsortedNumberList.replace(' ', '').split(',').map(num => Number(num))
        console.log(unorderedNumberList, '<<< unordered number list')
        endpoint(unorderedNumberList).then((data) => {   
            console.log('returned data: ', data);  
            const {
                sortedList,
                executionTimeMs,
                iterations,
                inputSize,
            } = JSON.parse(data.data);

            setReturnedApiData({
                sortedList,
                executionTimeMs: `${executionTimeMs} ms`,
                iterations,
                inputSize,
            });
            setSortingProcessVisible(true);
        }).catch((err) => {
            console.log('Error: ', err);
            setError(err?.response?.data?.msg);
        });
    }

    const resetForm = () => {
        document.getElementById('list-sorter').reset();
        setUnsortedNumberList('');
        setReturnedApiData({
            unsortedList: '',
            sortedList: '',
            executionTimeMs: '',
            iterations: [],
            inputSize: '',
        });
        setSortingProcessVisible(false);
    }

    useEffect(() => {
    }, [returnedApiData.sortedNumberList, sortingProcessVisible]);
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
                                    <input type='text' className='form-control' id='unsorted-list' placeholder='eg. 2, 10, 9, 6, 8, 1'
                                    onChange={(e) => setUnsortedNumberList(e.target.value)}
                                        value={unsortedNumberList}></input>
                                    <span className='input-group-text'>
                                    <i title='Copy' className="bi bi-back" onClick={() => navigator.clipboard.writeText(unsortedNumberList)} style={{'cursor': 'pointer'}}></i>
                                    </span>    
                                </div>

                                <div className='mt-4 mb-0 text-center'>
                                    <button type='submit' className='btn btn-primary'>
                                    Sort
                                    </button>
                                </div>
                                <label htmlFor='end-value' className='form-label'>Sorted list:</label>
                                <div className='mb-4 input-group'>
                                    <span className='input-group-text'>🙂</span>
                                    <input disabled={true} type='text' className='form-control' id='end-value' value={returnedApiData.sortedList}></input>
                                    <span className='input-group-text'>
                                    <i title='Copy' className="bi bi-back" onClick={() => navigator.clipboard.writeText(returnedApiData.sortedList)} style={{'cursor': 'pointer'}}></i>
                                    </span>
                                </div>
                                <label htmlFor='input-size' className='form-label'>Input size::</label>
                                <div className='mb-4 input-group'>
                                    <span className='input-group-text'>📏</span>
                                    <input disabled={true} type='text' className='form-control' id='input-size' value={returnedApiData.inputSize}></input>
                                    <span className='input-group-text'>
                                    <i title='Copy' className="bi bi-back" onClick={() => navigator.clipboard.writeText(returnedApiData.inputSize)} style={{'cursor': 'pointer'}}></i>
                                    </span>
                                </div>    
                                <label htmlFor='time-taken' className='form-label'>Time taken:</label>
                                <div className='mb-4 input-group'>
                                    <span className='input-group-text'>⌚</span>
                                    <input disabled={true} type='text' className='form-control' id='time-taken' value={returnedApiData.executionTimeMs}></input>
                                    <span className='input-group-text'>
                                    <i title='Copy' className="bi bi-back" onClick={() => navigator.clipboard.writeText(returnedApiData.executionTimeMs)} style={{'cursor': 'pointer'}}></i>
                                    </span>
                                </div>
                            </div>
                            <div id='sorting-algorithm-process' className={sortingProcessVisible ? 'open': 'closed'}>
                                {SortingAlgorithmProcess(
                                    sortingAlgorithmName,
                                    unsortedNumberList.replace(' ', '').split(',').map(num => Number(num)),
                                    returnedApiData
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
