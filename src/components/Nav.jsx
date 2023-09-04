import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SortingAlgorithmType from '../types/SortingAlgorithm';

function Nav() {
  const [subNavOpen, setSubNavOpen] = useState(false);

  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        ⇤⇥
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ maxWidth: '80%' }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title mb-0" id="offcanvasExampleLabel">Discrete Maths</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>

        <div className="offcanvas-body">
          <Link to="/" className="m-1 text-decoration-none" style={{ color: 'black' }}>Home</Link>
          <br />
          <Link
            to="/base-converter"
            className="m-1 text-decoration-none"
            style={{ color: 'black' }}
          >
            Base converter

          </Link>
          <br />
          <Link
            to="/summation-calculator"
            className="m-1 text-decoration-none"
            style={{ color: 'black' }}
          >
            Summation calculator

          </Link>
          <br />
          <Link
            onClick={() => {
              setSubNavOpen(!subNavOpen);
            }}
            className="m-1 text-decoration-none"
            to="/sorting-algorithms"
            style={{ color: 'black' }}
          >
            Sorting Algorithms
          </Link>
          <ul className={subNavOpen ? 'open' : 'closed'} style={{ marginBottom: '1px' }}>
            <li key="nav-bubble-sort">
              <Link
                to="/sorting-algorithms/bubble-sort"
                className="m-1 text-decoration-none"
                style={{ color: 'black' }}
              >
                {SortingAlgorithmType.BUBBLE_SORT.name}
              </Link>
            </li>
            <li key="nav-bubble-sort-faster">
              <Link
                to="/sorting-algorithms/bubble-sort-faster"
                className="m-1 text-decoration-none"
                style={{ color: 'black' }}
              >
                {SortingAlgorithmType.BUBBLE_SORT_FASTER.name}
              </Link>
            </li>
            <li key="nav-selection-sort">
              <Link
                to="/sorting-algorithms/selection-sort"
                className="m-1 text-decoration-none"
                style={{ color: 'black' }}
              >
                {SortingAlgorithmType.SELECTION_SORT.name}
              </Link>
            </li>
            <li key="nav-insertion-sort">
              <Link
                to="/sorting-algorithms/insertion-sort"
                className="m-1 text-decoration-none"
                style={{ color: 'black' }}
              >
                {SortingAlgorithmType.INSERTION_SORT.name}
              </Link>
            </li>
            <li key="nav-merge-sort">
              <Link
                to="/sorting-algorithms/merge-sort"
                className="m-1 text-decoration-none"
                style={{ color: 'black' }}
              >
                {SortingAlgorithmType.MERGE_SORT.name}
              </Link>
            </li>
            <li key="nav-quick-sort">
              <Link
                to="/sorting-algorithms/quick-sort"
                className="m-1 text-decoration-none"
                style={{ color: 'black' }}
              >
                {SortingAlgorithmType.QUICK_SORT.name}
              </Link>
            </li>
          </ul>
          <Link
            to="/permutations-and-combinations"
            className="m-1 text-decoration-none"
            style={{ color: 'black' }}
          >
            Permutations and Combinations
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Nav;
