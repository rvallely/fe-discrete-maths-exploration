import React from 'react';
import SortingAlgorithmType from '../types/SortingAlgorithm';
import PATHS from '../types/PATHS';

function Nav() {
  const currentLocation = window.location.pathname;
  const defaultFontColour = window.location.pathname === '/home' ? 'light-font' : 'dark-font';

  console.log(currentLocation, '<< current location');
  console.log('Object.values(PATHS).map(({ mainPath }) => mainPath): ', Object.values(PATHS).map(({ mainPath }) => mainPath))
  const fontColours = Object.values(PATHS).map(({ mainPath }) => mainPath).reduce((acc, navItem) => ({
    ...acc,
    [navItem]: (currentLocation === navItem) || (navItem === PATHS.SortingAlgorithms.mainPath && currentLocation.includes(
      navItem,
    ))
      ? 'selected-nav-item-font-color'
      : defaultFontColour,
  }), {});

  return (
    <ul className="nav justify-content-end app-nav">
      <li className="nav-item">
        <a className={`nav-link app-nav-item ${fontColours[PATHS.Home.mainPath]}`} href={PATHS.Home.mainPath}>
          <strong>D</strong>
          M
          {' '}
          <strong>HOME</strong>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link app-nav-item ${fontColours[PATHS.WhatIsDiscreteMaths.mainPath]}`}
          href={PATHS.WhatIsDiscreteMaths.mainPath}
        >
          <strong>
            WHAT IS DISCRETE MATHS?
          </strong>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link dropdown-toggle app-nav-item ${fontColours[PATHS.SortingAlgorithms.mainPath]}`}
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
        {/* <a
          className={`nav-link app-nav-item ${fontColours[PATHS.BaseConverter]}`}
          href={PATHS.BaseConverter}
        >
          <strong>
            BASE CONVERTER
          </strong>
        </a> */}
        <a
          className={`nav-link dropdown-toggle app-nav-item ${fontColours[PATHS.NumberBases.mainPath]}`}
          href={window.location.href}
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <strong>NUMBER BASES</strong>
        </a>
        <div className="dropdown-menu bg-white" aria-labelledby="navbarDropdown">
          {Object.entries(PATHS.NumberBases.subPaths).map(([name, path]) => {
            return (
              <a
                className={`dropdown-item app-nav-item ${fontColours[path]}`}
                href={path}
              >
                <strong>
                  {name.toUpperCase()}
                </strong>
              </a>
            );
          })}
        </div>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link dropdown-toggle app-nav-item ${defaultFontColour}`}
          href={window.location.href}
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <strong>COMING SOON</strong>
        </a>
        <div className="dropdown-menu bg-white" aria-labelledby="navbarDropdown">
          {['PERMUTATIONS AND COMBINATIONS', 'SET THEORY'].map((topic) => (
            <p
              className={`app-nav-item ${fontColours[defaultFontColour]}`}
              style={{ marginLeft: '15px', marginRight: '15px' }}
            >
              <strong>
                {topic}
              </strong>
            </p>
          ))}
        </div>
      </li>
    </ul>
  );
}

export default Nav;
