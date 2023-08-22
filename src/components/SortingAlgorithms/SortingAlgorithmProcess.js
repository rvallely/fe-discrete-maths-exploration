import React from 'react';
import { SortingAlgorithmType } from '../../types/SortingAlgorithm';
import QuickSortProcess from './QuickSortProcess';

function renderCorrectAlgorithmProcessDisplay (sortingAlgorithmName, unsortedNumberList, returnedApiData) {
    console.log(returnedApiData.iterations[0], '<<< first element iterations');
    console.log(unsortedNumberList, '<<< unsortedNumber list')
    let correctSortingAlgorithmDisplay = '';
    switch (sortingAlgorithmName) {
        case SortingAlgorithmType.BUBBLE_SORT.name:
            correctSortingAlgorithmDisplay = <div>
                    <h4>Start: [{String(unsortedNumberList)}]</h4>
                    <table className="table">
                        <thead>
                            <tr key='bubble-sort-process-columns'>
                                <th scope="col">Pass</th>
                                <th scope="col">List After Pass</th>
                                <th scope="col">Swap Needed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {returnedApiData.iterations.map((step, index) => {
                            // console.log('step: ', step)
                            return (
                                <tr >
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
            <table className="table">
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
                <h5>Splitting Process</h5>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Pass</th>
                    <th scope="col">List</th>
                    </tr>
                </thead>
                <tbody>
                    {returnedApiData.iterations.splitting.map((step, index) => {
                
                    return (
                        <tr>
                        <td>{index + 1}</td>
                        <td>{JSON.stringify(step)}</td>
                    </tr>
                    )})}
                </tbody>
            </table>
            <br>
            </br>
            <h5>Sorting Process</h5>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Pass</th>
                    <th scope="col">List</th>
                    </tr>
                </thead>
                <tbody>
                    {returnedApiData.iterations.sorting.map((step, index) => {
                
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
        case SortingAlgorithmType.QUICK_SORT.name:
            correctSortingAlgorithmDisplay = <QuickSortProcess iterations={returnedApiData.iterations}/>;
            break;
        case SortingAlgorithmType.INSERTION_SORT.name:
            correctSortingAlgorithmDisplay = <div>
            <h4>Start: [{String(unsortedNumberList)}]</h4>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Pass</th>
                    <th scope="col">List Before Pass</th>
                    <th scope="col">Value Being Inserted</th>
                    <th scope="col">List After Removing Value Being Inserted</th>
                    <th scope="col">Internal Process</th>
                    <th scope="col">List After Pass</th>
                    </tr>
                </thead>
                <tbody>
                    {returnedApiData.iterations.map((step, index) => {
                    return (
                        <tr>
                        <td>{index + 1}</td>
                        <td>[{String(step.listBeforePass)}]</td>
                        <td>{String(step.valueBeingInserted)}</td>
                        <td>[{String(step.numberListAfterRemovingValueBeingInserted)}]</td>
                        <td>{step.process.reduce((acc, status) => {
                            return acc.concat([status, <br></br>]);
                        }, [])}</td>
                        <td>[{String(step.listAfterPass)}]</td>
                    </tr>
                    )})}
                </tbody>
            </table> 
            <h4>End: [{String(returnedApiData.sortedList)}]</h4>
        </div>
            break;
        case SortingAlgorithmType.SELECTION_SORT.name:
            correctSortingAlgorithmDisplay = <div>
            <h4>Start: [{String(unsortedNumberList)}]</h4>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Pass</th>
                    <th scope="col">List Before Pass</th>
                    <th scope="col">Index To Have Sorted Value Assigned To</th>
                    <th scope="col">Internal Process</th>
                    <th scope="col">List After Pass</th>
                    </tr>
                </thead>
                <tbody>
                    {returnedApiData.iterations.map((step, index) => {
                    return (
                        <tr >
                        <td>{index + 1}</td>
                        <td>[{String(step.listBeforePass)}]</td>
                        <td>{String(step.indexToHaveSortedValueAssigned)}</td>
                        <td>{step.process.reduce((acc, status) => {
                            return acc.concat([status, <br></br>]);
                        }, [])}</td>
                        <td>[{String(step.listAfterPass)}]</td>
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
    const sortingAlgorithmProcess = returnedApiData.sortedList.length === 0
    ? ''
    : renderCorrectAlgorithmProcessDisplay (sortingAlgorithmName, unsortedNumberList, returnedApiData);
    return sortingAlgorithmProcess;
}

export default SortingAlgorithmProcess;
