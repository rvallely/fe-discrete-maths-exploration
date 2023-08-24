import React from 'react';
import { SortingAlgorithmType } from '../../types/SortingAlgorithm';
import QuickSortProcess from './QuickSortProcess';
import { v4 as uuidv4 } from 'uuid';

function renderCorrectAlgorithmProcessDisplay (sortingAlgorithmName, returnedApiData) {
    console.log(returnedApiData.iterations[0], '<<< first element iterations');
    switch (sortingAlgorithmName) {
        case SortingAlgorithmType.BUBBLE_SORT.name:
            return <div>
                    <h4>Start: [{String(returnedApiData.unsortedList)}]</h4>
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
                            return (
                                <tr key={uuidv4()}>
                                    <td>{index + 1}</td>
                                    <td>[{String(step.listAfterPass)}]</td>
                                    <td>{String(step.swapNeeded)}</td>
                                </tr>
                            )})}
                        </tbody>
                    </table> 
                    <h4>End: [{String(returnedApiData.sortedList)}]</h4>
                </div>
        case SortingAlgorithmType.BUBBLE_SORT_FASTER.name:
            return <div>
            <h4>Start: [{String(returnedApiData.unsortedList)}]</h4>
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
                    return (
                        <tr key={uuidv4()}>
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
        case SortingAlgorithmType.MERGE_SORT.name:
            return <div>
                <h4>Start: [{String(returnedApiData.unsortedList)}]</h4>
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
                        <tr key={uuidv4()}>
                        <td>{index + 1}</td>
                        <td>{JSON.stringify(step)}</td>
                    </tr>
                    )})}
                </tbody>
            </table>
            <br key={uuidv4}></br>
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
                        <tr key={uuidv4()}>
                        <td>{index + 1}</td>
                        <td>{JSON.stringify(step)}</td>
                    </tr>
                    )})}
                </tbody>
            </table>
            <h4>End: [{String(returnedApiData.sortedList)}]</h4>
            </div>
        case SortingAlgorithmType.QUICK_SORT.name:
            return <QuickSortProcess iterations={returnedApiData.iterations}/>;
        case SortingAlgorithmType.INSERTION_SORT.name:
            return <div>
            <h4>Start: [{String(returnedApiData.unsortedList)}]</h4>
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
                        <tr key={uuidv4()}>
                        <td>{index + 1}</td>
                        <td>[{String(step.listBeforePass)}]</td>
                        <td>{String(step.valueBeingInserted)}</td>
                        <td>[{String(step.numberListAfterRemovingValueBeingInserted)}]</td>
                        <td>{step.process.reduce((acc, status) => {
                            return acc.concat([status, <br key={uuidv4()}></br>]);
                        }, [])}</td>
                        <td>[{String(step.listAfterPass)}]</td>
                    </tr>
                    )})}
                </tbody>
            </table> 
            <h4>End: [{String(returnedApiData.sortedList)}]</h4>
        </div>
        case SortingAlgorithmType.SELECTION_SORT.name:
            return <div>
            <h4>Start: [{String(returnedApiData.unsortedList)}]</h4>
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
                        <tr key={uuidv4()}>
                        <td>{index + 1}</td>
                        <td>[{String(step.listBeforePass)}]</td>
                        <td>{String(step.indexToHaveSortedValueAssigned)}</td>
                        <td>{step.process.reduce((acc, status) => {
                            return acc.concat([status, <br key={uuidv4()}></br>]);
                        }, [])}</td>
                        <td>[{String(step.listAfterPass)}]</td>
                    </tr>
                    )})}
                </tbody>
            </table> 
            <h4>End: [{String(returnedApiData.sortedList)}]</h4>
        </div>
        default:
            break;
    }
}

function SortingAlgorithmProcess(sortingAlgorithmName, returnedApiData) {
    console.log(returnedApiData, '<<< returnedApiData');
    const sortingAlgorithmProcess = returnedApiData.sortedList.length === 0
    ? ''
    : renderCorrectAlgorithmProcessDisplay (sortingAlgorithmName, returnedApiData);
    return sortingAlgorithmProcess;
}

export default SortingAlgorithmProcess;
