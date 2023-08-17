import React from 'react';
import { SortingAlgorithmType } from '../../types/SortingAlgorithm';

function renderCorrectAlgorithmProcessDisplay (sortingAlgorithmName, unsortedNumberList, returnedApiData) {
    console.log(returnedApiData.iterations[0], '<<< first element iterations');
    console.log(unsortedNumberList, '<<< unsortedNumber list')
    let correctSortingAlgorithmDisplay = '';
    switch (sortingAlgorithmName) {
        case SortingAlgorithmType.BUBBLE_SORT.name:
            correctSortingAlgorithmDisplay = <div>
                    <h4>Start: [{String(unsortedNumberList)}]</h4>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Pass</th>
                            <th scope="col">List After Pass</th>
                            <th scope="col">Swap Needed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {returnedApiData.iterations.map((step, index) => {
                            // console.log('step: ', step)
                            return (
                                <tr>
                                <td>{index + 1}</td>
                                <td>[{String(step.listAfterPass)}]</td>
                                <td>{String(step.swapNeeded)}</td>
                            </tr>
                            )})}
                        </tbody>
                    </table> 
                    <h4>End: [{String(returnedApiData.sortedList)}]</h4>
                </div>
            break;
        case SortingAlgorithmType.BUBBLE_SORT_FASTER.name:
            correctSortingAlgorithmDisplay = <div>
            <h4>Start: [{String(unsortedNumberList)}]</h4>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Pass</th>
                    <th scope="col">List Before Pass</th>
                    <th scope="col">Swap Needed</th>
                    <th scope="col">List After Pass</th>
                    <th scope="col">Sorted List</th>
                    </tr>
                </thead>
                <tbody>
                    {returnedApiData.iterations.map((step, index) => {
                    // console.log('step: ', step)
                    return (
                        <tr>
                        <td>{index + 1}</td>
                        <td>[{String(step.listBeforePass)}]</td>
                        <td>{String(step.swapNeeded)}</td>
                        <td>[{String(step.listAfterPass)}]</td>
                        <td>[{String(step.sortedList)}]</td>
                    </tr>
                    )})}
                </tbody>
            </table> 
            <h4>End: [{String(returnedApiData.sortedList)}]</h4>
        </div>
            break;
        case SortingAlgorithmType.MERGE_SORT.name:
            correctSortingAlgorithmDisplay = <div>
                <h4>Start: [{String(unsortedNumberList)}]</h4>
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Pass</th>
                    <th scope="col">List</th>
                    </tr>
                </thead>
                <tbody>
                    {returnedApiData.iterations.map((step, index) => {
                
                    return (
                        <tr>
                        <td>{index + 1}</td>
                        <td>{JSON.stringify(step)}</td>
                    </tr>
                    )})}
                </tbody>
            </table>
            <h4>End: [{String(returnedApiData.sortedList)}]</h4>
            </div>
            break;
        default:
            break;
    }
    return correctSortingAlgorithmDisplay;
}

function SortingAlgorithmProcess(sortingAlgorithmName, unsortedNumberList, returnedApiData) {
    console.log(returnedApiData, '<<< returnedApiData');
    const sortingAlgorithmProcess = !returnedApiData.iterations.length
    ? ''
    : renderCorrectAlgorithmProcessDisplay (sortingAlgorithmName, unsortedNumberList, returnedApiData);
    return sortingAlgorithmProcess;
}

export default SortingAlgorithmProcess;

/**
 * {
        unsortedList: [...numberList],
        sortedList: listsToSort[0],
        inputSize: numberList.length,
        executionTimeMs,
        iterations: sortingSteps,
    }
 */