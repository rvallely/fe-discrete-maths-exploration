import React from 'react';

function SortingAlgorithmProcess(unsortedNumberList, sortingSteps, sortedNumberList) {
    const sortingAlgorithmProcess = !sortingSteps.length
    ? ''
    :
    (
    <div>
        <h4>Start: {String(unsortedNumberList)}</h4>
        <ol>{sortingSteps.map((step, index) => {
            return (
            <li>
                Pass {index}:
                List after pass: {JSON.stringify(step.iteration)}&emsp;
                Swap needed: {String(step.swapNeeded)}
            </li>
            )
        })}</ol>
        <h4>End: {String(sortedNumberList)}</h4>
    </div>
    )

    return sortingAlgorithmProcess;
}

export default SortingAlgorithmProcess;
