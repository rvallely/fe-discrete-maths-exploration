import React from 'react';
import SortingAlgorithmType from '../types/SortingAlgorithm';
import PATHS from '../types/PATHS';

function Nav() {
  const currentLocation = window.location.pathname;
  const defaultFontColour = window.location.pathname === '/home' ? 'light-font' : 'dark-font';

  const fontColours = Object.values(PATHS).reduce((acc, navItem) => ({
    ...acc,
    [navItem]: (currentLocation === navItem) || (navItem === PATHS.SortingAlgorithmHome && currentLocation.includes(
      navItem,
    ))
      ? 'selected-nav-item-font-color'
      : defaultFontColour,
  }), {});

  return (
    <ul className="nav justify-content-end app-nav">
      <li className="nav-item">
        <a className={`nav-link app-nav-item ${fontColours[PATHS.Home]}`} href={PATHS.Home}>
          <strong>D</strong>
          M
          {' '}
          <strong>HOME</strong>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link app-nav-item ${fontColours[PATHS.WhatIsDiscreteMath]}`}
          href={PATHS.WhatIsDiscreteMath}
        >
          <strong>
            WHAT IS DISCRETE MATH?
          </strong>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link dropdown-toggle app-nav-item ${fontColours[PATHS.SortingAlgorithmHome]}`}
          href={window.location.href}
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <strong>SORTING ALGORITHMS</strong>
        </a>
        <div className="dropdown-menu bg-white" aria-labelledby="navbarDropdown">
          {Object.keys(SortingAlgorithmType).map((sortingAlgorithmName) => {
            const href = `${SortingAlgorithmType[sortingAlgorithmName].pathName}`;
            return (
              <a
                className={`dropdown-item app-nav-item ${fontColours[href]}`}
                href={href}
              >
                <strong>
                  {SortingAlgorithmType[sortingAlgorithmName].name.toUpperCase()}
                </strong>
              </a>
            );
          })}
        </div>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link app-nav-item ${fontColours[PATHS.BaseConverter]}`}
          href={PATHS.BaseConverter}
        >
          <strong>
            BASE CONVERTER
          </strong>
        </a>
      </li>
    </ul>
  );
}

export default Nav;
