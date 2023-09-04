/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SortingAlgorithmProcess from './SortingAlgorithmProcess';
import { getSortedList } from '../../utils/server';

function SortingAlgorithm(
  {
    sortingAlgorithmName, sortingAlgorithmDescription, sortingAlgorithmVideo, sortingAlgorithmPathName,
  },
) {
  const [unsortedNumberList, setUnsortedNumberList] = useState('');
  const [error, setError] = useState(null);
  const [sortingAlgoName, setSortingAlgoName] = useState(sortingAlgorithmName);
  const [returnedApiData, setReturnedApiData] = useState({
    unsortedList: '',
    sortedList: '',
    executionTimeMs: '',
    iterations: [],
    inputSize: '',
  });

  /**
     * As this component is reused for for different sorting algorithms and their corresponding display methods in
     * SortingAlgorithmProcess, state needs to be reset if the sortingAlgorithmName prop changes.
     */
  if (sortingAlgorithmName !== sortingAlgoName) {
    setSortingAlgoName(sortingAlgorithmName);
    setUnsortedNumberList('');
    setReturnedApiData({
      unsortedList: '',
      sortedList: '',
      executionTimeMs: '',
      iterations: [],
      inputSize: '',
    });
    setError(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    getSortedList(
      { unsortedList: unsortedNumberList, sortingAlgoName },
      sortingAlgorithmPathName,
    ).then((data) => {
      const {
        unsortedList,
        sortedList,
        executionTimeMs,
        iterations,
        inputSize,
      } = JSON.parse(data.data);

      setReturnedApiData({
        unsortedList,
        sortedList,
        executionTimeMs: `${executionTimeMs} ms`,
        iterations,
        inputSize,
      });
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Error: ', err);
      setError(err?.response?.data?.msg);
    });
  };

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
  };

  return (
    <div style={{ border: 'solid', borderColor: 'purple', margin: '40px' }}>
      <section id="number-list-sorting-form">
        <div
          className="container-fluid"
          style={
          {
            width: 'max-content',
          }
          }
        >
          <div className="container-lg text-center">
            <h2>{sortingAlgorithmName}</h2>
            <p>{sortingAlgorithmDescription}</p>
            <br />
            <video src={sortingAlgorithmVideo} width="600" height="300" controls="controls" autoPlay={false} />
            <p className="text-danger">{error}</p>
            <form
              onSubmit={handleSubmit}
              id="list-sorter"
              className="row justify-content-center my-3"
            >
              <div className="col-lg-6">
                <label
                  htmlFor="start-value"
                  className="form-label"
                >
                  Please input a list of numbers delineated by a comma and a space:
                  {' '}

                </label>
                <div className="mb-4 input-group">
                  <span className="input-group-text">🙃</span>
                  <input
                    type="text"
                    className="form-control"
                    id="unsorted-list"
                    placeholder="eg. 2, 10, 9, 6, 8, 1"
                    onChange={(e) => setUnsortedNumberList(e.target.value)}
                    value={unsortedNumberList}
                  />
                  <span className="input-group-text">
                    <i
                      title="Copy"
                      className="bi bi-back"
                      onClick={() => navigator.clipboard.writeText(unsortedNumberList)}
                      style={{ cursor: 'pointer' }}
                    />
                  </span>
                </div>

                <div className="mt-4 mb-0 text-center">
                  <button type="submit" className="btn btn-primary">
                    Sort
                  </button>
                </div>
                <div className="mb-4">
                  <br />
                  <label htmlFor="end-value" className="form-label text-start">
                    Sorted list:
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">🙂</span>
                    </div>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="end-value"
                      value={returnedApiData.sortedList}
                    />
                    <span className="input-group-text">
                      <i
                        title="Copy"
                        className="bi bi-back"
                        onClick={() => navigator.clipboard.writeText(returnedApiData.sortedList)}
                        style={{ cursor: 'pointer' }}
                      />
                    </span>
                  </div>
                </div>

                <label htmlFor="input-size" className="form-label">Input size:</label>
                <div className="mb-4 input-group">
                  <span className="input-group-text">📏</span>
                  <input disabled type="text" className="form-control" id="input-size" value={returnedApiData.inputSize} />
                  <span className="input-group-text">
                    <i
                      title="Copy"
                      className="bi bi-back"
                      onClick={() => navigator.clipboard.writeText(returnedApiData.inputSize)}
                      style={{ cursor: 'pointer' }}
                    />
                  </span>
                </div>
                <label htmlFor="time-taken" className="form-label">Time taken:</label>
                <div className="mb-4 input-group">
                  <span className="input-group-text">⌚</span>
                  <input disabled type="text" className="form-control" id="time-taken" value={returnedApiData.executionTimeMs} />
                  <span className="input-group-text">
                    <i
                      title="Copy"
                      className="bi bi-back"
                      onClick={() => navigator.clipboard.writeText(returnedApiData.executionTimeMs)}
                      style={{ cursor: 'pointer' }}
                    />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div id="sorting-algorithm-process">
            {SortingAlgorithmProcess(
              sortingAlgoName,
              returnedApiData,
            )}
          </div>
          <div className="mt-4 mb-0 text-center">
            <button type="button" onClick={resetForm} className="btn btn-secondary text-center mb-2">Reset</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SortingAlgorithm;
