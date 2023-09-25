/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-quotes */
import React from 'react';
import infinityContinuousSymbol from '../assets/infinityContinuousSymbol.png';
import vennDiagramDiscreteSymbol from '../assets/vennDiagramDiscreteSymbol.png';

function WhatIsDiscreteMath() {
  return (
    <div className="container-fluid page fixed-page light-page dark-font content">
      <div className="row">
        <div className="col-xl text-center">
          <h1 style={{ fontSize: '118px' }}>
            <strong>
              What is Discrete Math?
            </strong>
          </h1>
          <p style={{ fontSize: '26px' }}>
            <strong>
              Let&apos;s take a look at what it isn&apos;t, to find out what it is. Mathematics can be broadly categorized
              into two main branches; Continuous and Discrete.
            </strong>
          </p>
        </div>
      </div>
      <div className="row">
        <div
          className="col-sm"
          style={{
 border: 'dashed', borderColor: 'green', marginRight: '40px', marginLeft: '40px',
}}
        >
          <img
            src={infinityContinuousSymbol}
            alt="Rainbow infinity symbol"
            className='what-is-discrete-math-img'
          />
          <h2 className="what-is-discrete-math-math-branch-text" style={{ fontSize: '32px' }}>
            <strong>
              CONTINUOUS MATHEMATICS
            </strong>
          </h2>
          <p className="what-is-discrete-math-math-branch-text" style={{ fontSize: '26px' }}>
            Continuous Mathematics deals with values that are uncountable and continuous. The values are often represented
            by
            {' '}
            <abbr title="Real numbers like x, y, z">real</abbr>
            {' '}
            numbers and can take on an infinite number of possible values within a given range.
            <br />
            <br />
            Continuous Mathematics is used to model and analyse phenomena that change continuously such as motion,
            optimization and geometric shapes.
          </p>
        </div>
        <div
          className="col-sm"
          style={{
 border: 'dashed', borderColor: 'blue', marginRight: '40px', marginLeft: '40px',
}}
        >
          <img
            src={vennDiagramDiscreteSymbol}
            alt="Venn diagram with shaded middle"
            className='what-is-discrete-math-img'
          />
          <h2 className="what-is-discrete-math-math-branch-text" style={{ fontSize: '32px' }}>
            <strong>
              DISCRETE MATHEMATICS
            </strong>
          </h2>
          <p className='what-is-discrete-math-math-branch-text' style={{ fontSize: '26px' }}>
            Discrete Mathematics concerns the study of mathematical structures that are distinct and separable. It is
            suited to solving problems with finite or countable possibilities.
            <br />
            <br />
            Applications include cryptography, combinatorics, and discrete optimization.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xl text-center">
          <p style={{ fontSize: '26px' }}>
            <strong>
              Generally speaking, continuous data is measured and discrete data is counted.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatIsDiscreteMath;
