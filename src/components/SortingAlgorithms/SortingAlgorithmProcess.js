import React from 'react';
import { SortingAlgorithmType } from '../../types/SortingAlgorithm';

function renderCorrectAlgorithmProcessDisplay (sortingAlgorithmName, unsortedNumberList, sortingSteps, sortedNumberList) {
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
                            {sortingSteps.map((step, index) => {
                            console.log('step: ', step)
                            return (
                                <tr>
                                <td>{index + 1}</td>
                                <td>[{String(step.listAfterPass)}]</td>
                                <td>{String(step.swapNeeded)}</td>
                            </tr>
                            )})}
                        </tbody>
                    </table> 
                    <h4>End: [{String(sortedNumberList)}]</h4>
                </div>
            break;
        case SortingAlgorithmType.BUBBLE_SORT_FASTER.name:
            <div>bubble_sort_faster_process</div>
            break;
        default:
            break;
    }
    return correctSortingAlgorithmDisplay;
}

function SortingAlgorithmProcess(sortingAlgorithmName, unsortedNumberList, sortingSteps, sortedNumberList) {
    const sortingAlgorithmProcess = !sortingSteps.length
    ? ''
    : renderCorrectAlgorithmProcessDisplay (sortingAlgorithmName, unsortedNumberList, sortingSteps, sortedNumberList);
    return sortingAlgorithmProcess;
}

export default SortingAlgorithmProcess;
