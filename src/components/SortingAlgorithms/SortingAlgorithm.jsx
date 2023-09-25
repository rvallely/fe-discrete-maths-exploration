/* eslint-disable object-curly-newline */
/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-indent */
/* eslint-disable spaced-comment */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SortingAlgorithmProcess from './SortingAlgorithmProcess';
import { getSortedList } from '../../utils/server';
import lightBgrdDarkDetailDownArrows from '../../assets/arrowsDownLightBlueDark.mp4';
import lightBgrdDarkDetailUpArrows from '../../assets/arrowsUpLightBlueDark.mp4';

function SortingAlgorithm(
  {
    sortingAlgorithmName, sortingAlgorithmDescription, sortingAlgorithmVideo, sortingAlgorithmPathName, sortingAlgorithmIcon,
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

  function scrollToPage(pageNumber) {
    const page = document.getElementById(`page${pageNumber}`);
    page.scrollIntoView({ behavior: 'smooth' });
}
  return (
    <div className="test-body light-page dark-font">
      <div className="scrollable-skip-a-page first-scrollable-skip-a-page content" id="page1">
      {/* , border: 'dashed', borderColor: 'purple' */}
          <div className="row" style={{ marginTop: '0', marginRight: '10%', marginLeft: '10%' }}>
            <h2><strong>{sortingAlgorithmName}</strong></h2>
            <p>{sortingAlgorithmDescription}</p>
          </div>
          <video src={sortingAlgorithmVideo} width="600" height="300" controls="controls" autoPlay={false} style={{ flexGrow: 1 }} />
          <p><strong>Try it out</strong></p>
          <video
            src={lightBgrdDarkDetailDownArrows}
            height='60'
            autoPlay
            loop
            onClick={(() => scrollToPage(2))}
          />
      </div>

      <div className="scrollable-skip-a-page content" id="page2">
        <h2><strong>{sortingAlgorithmName}</strong></h2>
        <div className="row">
          <div className="col-xl" id="try-sorting-algorithm">
            Bubble
          </div>
          <div className="col-9">
            <form
              onSubmit={handleSubmit}
              id="list-sorter"
              className="row justify-content-center my-3 rounded-box dark-font"
              // style={{ border: 'dashed', borderColor: 'teal' }}
            >
              {/* , border: 'dashed', borderColor: 'mint' */}
              <div className="col-lg-6" style={{ width: '100%' }}>
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
                  <button type="submit" className="btn btn-lg text-center mb-2 button blue-button light-font">
                    Sort
                  </button>
                </div>
                <div className="mb-4">
                  <br />
                  <label htmlFor="end-value" className="form-label text-start">
                    Sorted list:
                  </label>
                  <div className="input-group">
                    {/* <div className="input-group-prepend"> */}
                      <span className="input-group-text input-group-prepend">🙂</span>
                    {/* </div> */}
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
          <div className="col" style={{ border: 'dashed', borderColor: 'blue' }}>
            bubble
          </div>
        </div>
        {/* <div className="row"> */}
          <div className="col-xl text-center">
            {SortingAlgorithmProcess(
              sortingAlgoName,
              returnedApiData,
            )}
          </div>
        {/* </div> */}
        <div className="row" style={{ flexGrow: 1 }}>
          <div className="mt-4 mb-0 text-center">
            <button type="button" onClick={resetForm} className="btn btn-lg text-center mb-2 button dark-button light-font">Reset</button>
          </div>
        </div>
        <p><strong>Back to top</strong></p>
        <video
          src={lightBgrdDarkDetailUpArrows}
          height='60'
          autoPlay
          loop
          onClick={(() => scrollToPage(1))}
        />
      </div>
    </div>
  );
}

export default SortingAlgorithm;
