/* eslint-disable max-len */
/* eslint-disable key-spacing */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import SortingAlgorithmType from '../../types/SortingAlgorithm';
import QuickSortProcess from './QuickSortProcess';

function renderCorrectAlgorithmProcessDisplay(sortingAlgorithmName, returnedApiData) {
  let correctAlgorithmProcessDisplay;
  switch (sortingAlgorithmName) {
    case SortingAlgorithmType.BUBBLE_SORT.name:
      correctAlgorithmProcessDisplay = (
        <table className="table table-bordered table-responsive sorting-algorithm-process-table">
          <thead className="table-active">
            <tr key="bubble-sort-process-columns">
              <th scope="col">Pass</th>
              <th scope="col">List After Pass</th>
              <th scope="col">Swap Needed</th>
            </tr>
          </thead>
          <tbody>
            {returnedApiData.iterations.map((step, index) => (
              <tr key={uuidv4()}>
                <td>{index + 1}</td>
                <td>
                  {JSON.stringify(step.listAfterPass)}
                </td>
                <td>{String(step.swapNeeded)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
      break;
    case SortingAlgorithmType.BUBBLE_SORT_FASTER.name:
      correctAlgorithmProcessDisplay = (
        <table className="table table-bordered table-responsive sorting-algorithm-process-table">
          <thead className="table-active">
            <tr>
              <th scope="col">Pass</th>
              <th scope="col">List Before Pass (inputList)</th>
              <th scope="col">Swap Needed</th>
              <th scope="col">List After Pass</th>
              <th scope="col">Sorted List (sortedList)</th>
            </tr>
          </thead>
          <tbody>
            {returnedApiData.iterations.map((step, index) => (
              <tr key={uuidv4()}>
                <td>{index + 1}</td>
                <td>
                  {JSON.stringify(step.listBeforePass)}
                </td>
                <td>{String(step.swapNeeded)}</td>
                <td>
                  {JSON.stringify(step.listAfterPass)}
                </td>
                <td>
                  {JSON.stringify(step.sortedList)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
      break;
    case SortingAlgorithmType.MERGE_SORT.name:
      correctAlgorithmProcessDisplay = (
        <div>
          <h5>
            <strong>
              Splitting Process
            </strong>
          </h5>
          <table className="table table-bordered">
            <thead className="table-active">
              <tr>
                <th scope="col">Pass</th>
                <th scope="col">List</th>
              </tr>
            </thead>
            <tbody>
              {returnedApiData.iterations.splitting.map((step, index) => (
                <tr key={uuidv4()}>
                  <td>{index + 1}</td>
                  <td>{JSON.stringify(step)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br key={uuidv4} />
          <h5>
            <strong>
              Sorting Process
            </strong>

          </h5>
          <table className="table table-bordered">
            <thead className="table-active">
              <tr>
                <th scope="col">Pass</th>
                <th scope="col">List</th>
              </tr>
            </thead>
            <tbody>
              {returnedApiData.iterations.sorting.map((step, index) => (
                <tr key={uuidv4()}>
                  <td>{index + 1}</td>
                  <td>{JSON.stringify(step)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      break;
    case SortingAlgorithmType.QUICK_SORT.name:
      correctAlgorithmProcessDisplay = (
        <QuickSortProcess iterations={returnedApiData.iterations} />
      );
      break;
    case SortingAlgorithmType.INSERTION_SORT.name:
      correctAlgorithmProcessDisplay = (
        <table className="table table-bordered">
          <thead className="table-active">
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
            {returnedApiData.iterations.map((step, index) => (
              <tr key={uuidv4()}>
                <td>{index + 1}</td>
                <td>
                  {JSON.stringify(step.listBeforePass)}
                </td>
                <td>{String(step.valueBeingInserted)}</td>
                <td>
                  {JSON.stringify(step.numberListAfterRemovingValueBeingInserted)}
                </td>
                <td>
                  {step.process.reduce((acc, status) => acc.concat([status, <br key={uuidv4()} />]), [])}
                </td>
                <td>
                  {JSON.stringify(step.listAfterPass)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
      break;
    case SortingAlgorithmType.SELECTION_SORT.name:
      correctAlgorithmProcessDisplay = (
        <table className="table table-bordered">
          <thead className="table-active">
            <tr>
              <th scope="col">Pass</th>
              <th scope="col">List Before Pass</th>
              <th scope="col">Index To Have Sorted Value Assigned To</th>
              <th scope="col">Internal Process</th>
              <th scope="col">List After Pass</th>
            </tr>
          </thead>
          <tbody>
            {returnedApiData.iterations.map((step, index) => (
              <tr key={uuidv4()}>
                <td>{index + 1}</td>
                <td>
                  {JSON.stringify(step.listBeforePass)}
                </td>
                <td>{String(step.indexToHaveSortedValueAssigned)}</td>
                <td>
                  {step.process.reduce((acc, status) => acc.concat([status, <br key={uuidv4()} />]), [])}
                </td>
                <td>
                  {JSON.stringify(step.listAfterPass)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
      break;
    default:
      return undefined;
  }
  return (
    <div className="rounded-box dark-font" style={{ width: 'fit-content' }}>
      <h4 style={{ marginTop: '20px', marginBottom: '20px' }}>
        <strong>
          Start:
          {' '}
          {JSON.stringify(returnedApiData.unsortedList)}
        </strong>
      </h4>
      {correctAlgorithmProcessDisplay}
      <h4 style={{ marginTop: '20px', marginBottom: '20px' }}>
        <strong>
          End:
          {' '}
          {JSON.stringify(returnedApiData.sortedList)}
        </strong>
      </h4>
    </div>
  );
}

function SortingAlgorithmProcess(sortingAlgorithmName, returnedApiData) {
  const sortingAlgorithmProcess = returnedApiData.sortedList.length === 0
    ? ''
    : renderCorrectAlgorithmProcessDisplay(sortingAlgorithmName, returnedApiData);
  return sortingAlgorithmProcess;
}

export default SortingAlgorithmProcess;
