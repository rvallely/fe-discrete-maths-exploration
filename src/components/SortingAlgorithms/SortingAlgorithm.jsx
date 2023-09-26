/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import SortingAlgorithmProcess from './SortingAlgorithmProcess';
import { getSortedList } from '../../utils/server';
import lightBgrdDarkDetailDownArrows from '../../assets/arrowsDownLightBlueDark.mp4';
import lightBgrdDarkDetailUpArrows from '../../assets/arrowsUpLightBlueDark.mp4';

/*
 * TODO: assign prop-types to validate
 * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
 */
function SortingAlgorithm(
  {
    sortingAlgorithmName,
    sortingAlgorithmDescription,
    sortingAlgorithmVideo,
    sortingAlgorithmPathName,
    sortingAlgorithmIcons,
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
        <div className="row" style={{ marginTop: '0', marginRight: '10%', marginLeft: '10%' }}>
          <h2><strong>{sortingAlgorithmName}</strong></h2>
          {sortingAlgorithmDescription}
        </div>
        <video
          src={sortingAlgorithmVideo}
          width="600"
          height="50%"
          controls="controls"
          autoPlay={false}
          className="center-item"
          style={{ flexGrow: 1 }}
        />
        <div className="center-item">
          <p style={{ marginBottom: '0px' }}><strong>Try it out</strong></p>
        </div>
        <div className="center-item">
          <video
            className="scroll-buttons"
            onClick={(() => scrollToPage(2))}
            src={lightBgrdDarkDetailDownArrows}
            height="60"
            autoPlay
            loop
            disablePictureInPicture
          />
        </div>
      </div>

      <div className="scrollable-skip-a-page content">
        <h2 id="page2" className="center-item"><strong>{sortingAlgorithmName}</strong></h2>
        <div className="row">
          <div className="col center-item">
            <img
              src={sortingAlgorithmIcons[1]}
              alt="sorting algorithm icon"
              className="center-item sorting-algorithm-icon"
            />
          </div>
          <div className="col-5">
            <form
              onSubmit={handleSubmit}
              id="list-sorter"
              className="row justify-content-center my-3 rounded-box dark-font"
            >
              <div className="col-lg-6 padding-20 sorting-algorithm-font-size" style={{ width: '100%' }}>
                <label
                  htmlFor="start-value"
                  className="form-label"
                >
                  Please input a list of numbers delineated by a comma and a space:
                  {' '}

                </label>
                <p className="text-danger text-center">{error}</p>
                <div className="mb-4 input-group">
                  <span className="input-group-text">🙃</span>
                  <input
                    type="text"
                    className="form-control sorting-algorithm-font-size"
                    id="unsorted-list"
                    placeholder="eg. 2, 10, 9, 6, 8, 1"
                    onChange={(e) => setUnsortedNumberList(e.target.value)}
                    value={unsortedNumberList}
                  />
                  <span className="input-group-text">
                    <i
                      role="button"
                      tabIndex={0}
                      title="Copy"
                      className="bi bi-back sorting-algorithm-font-size"
                      onClick={() => navigator.clipboard.writeText(unsortedNumberList)}
                      onKeyUp={() => navigator.clipboard.writeText(unsortedNumberList)}
                      style={{ cursor: 'grabbing' }}
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
                    <span className="input-group-text input-group-prepend">🙂</span>
                    <input
                      disabled
                      type="text"
                      className="form-control sorting-algorithm-font-size"
                      id="end-value"
                      value={returnedApiData.sortedList}
                    />
                    <span className="input-group-text">
                      <i
                        role="button"
                        tabIndex={0}
                        title="Copy"
                        className="bi bi-back"
                        onClick={() => navigator.clipboard.writeText(returnedApiData.sortedList)}
                        onKeyUp={() => navigator.clipboard.writeText(returnedApiData.sortedList)}
                        style={{ cursor: 'grabbing' }}
                      />
                    </span>
                  </div>
                </div>

                <label htmlFor="input-size" className="form-label">Input size:</label>
                <div className="mb-4 input-group">
                  <span className="input-group-text">📏</span>
                  <input
                    disabled
                    type="text"
                    className="form-control sorting-algorithm-font-size"
                    id="input-size"
                    value={returnedApiData.inputSize}
                  />
                  <span className="input-group-text">
                    <i
                      role="button"
                      tabIndex={0}
                      title="Copy"
                      className="bi bi-back"
                      onClick={() => navigator.clipboard.writeText(returnedApiData.inputSize)}
                      onKeyUp={() => navigator.clipboard.writeText(returnedApiData.inputSize)}
                      style={{ cursor: 'grabbing' }}
                    />
                  </span>
                </div>
                <label htmlFor="time-taken" className="form-label">Time taken:</label>
                <div className="mb-4 input-group">
                  <span className="input-group-text">⌚</span>
                  <input
                    disabled
                    type="text"
                    className="form-control sorting-algorithm-font-size"
                    id="time-taken"
                    value={returnedApiData.executionTimeMs}
                  />
                  <span className="input-group-text">
                    <i
                      role="button"
                      tabIndex={0}
                      title="Copy"
                      className="bi bi-back"
                      onClick={() => navigator.clipboard.writeText(returnedApiData.executionTimeMs)}
                      onKeyUp={() => navigator.clipboard.writeText(returnedApiData.executionTimeMs)}
                      style={{ cursor: 'grabbing' }}
                    />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col center-item">
            <img
              src={sortingAlgorithmIcons[2]}
              alt="sorting algorithm icon"
              className="center-item sorting-algorithm-icon"
            />
          </div>
        </div>
        <div className="col-xl text-center center-item">
          {SortingAlgorithmProcess(
            sortingAlgoName,
            returnedApiData,
          )}
        </div>
        <div className="row" style={{ flexGrow: 1 }}>
          <div className="mt-4 mb-0 text-center">
            <button
              type="button"
              onClick={resetForm}
              className="btn btn-lg text-center mb-2 button dark-button light-font"
            >
              Reset
            </button>
          </div>
        </div>
        <div className="center-item">
          <p style={{ marginBottom: '0px' }}><strong>Back to top</strong></p>
        </div>
        <div className="center-item">
          <video
            className="scroll-buttons"
            onClick={(() => scrollToPage(1))}
            src={lightBgrdDarkDetailUpArrows}
            height="60"
            autoPlay
            loop
            disablePictureInPicture
          />
        </div>
      </div>
    </div>
  );
}

export default SortingAlgorithm;
