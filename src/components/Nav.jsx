/* eslint-disable semi */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import SortingAlgorithmType from '../types/SortingAlgorithm';

function Nav() {
  const fontColour = window.location.pathname === '/' ? 'home-page-font' : 'app-font'
  return (
    <ul className="nav justify-content-end app-nav">
      <li className="nav-item">
        <a className={`nav-link app-nav-item ${fontColour}`} href="/">
          <strong>D</strong>
          M
          {' '}
          <strong>HOME</strong>

        </a>
      </li>
      <li className="nav-item">
        <a className={`nav-link app-nav-item ${fontColour}`} href="/what-is-discrete-math"><strong>WHAT IS DISCRETE MATH?</strong></a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link dropdown-toggle app-nav-item ${fontColour}`}
          href={window.location.href}
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <strong>SORTING ALGORITHMS</strong>
        </a>
        <div className="dropdown-menu bg-transparent" aria-labelledby="navbarDropdown">
          {Object.keys(SortingAlgorithmType).map((sortingAlgorithmName) => {
            const href = `/sorting-algorithms/${SortingAlgorithmType[sortingAlgorithmName].pathName}`;
            return <a className={`dropdown-item app-nav-item ${fontColour}`} href={href}><strong>{SortingAlgorithmType[sortingAlgorithmName].name.toUpperCase()}</strong></a>;
          })}
        </div>
      </li>
      <li className="nav-item">
        <a className={`nav-link app-nav-item ${fontColour}`} href="/base-converter"><strong>BASE CONVERTER</strong></a>
      </li>
      <li className="nav-item">
        <a className={`nav-link app-nav-item ${fontColour}`} href="/summation-calculator"><strong>SUMMATION CALCULATOR</strong></a>
      </li>
    </ul>
  );
}

export default Nav;
