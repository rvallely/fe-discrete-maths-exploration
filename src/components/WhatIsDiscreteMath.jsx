import React from 'react';
import infinityContinuousSymbol from '../assets/infinityContinuousSymbol.png';
import vennDiagramDiscreteSymbol from '../assets/vennDiagramDiscreteSymbol.png';

function WhatIsDiscreteMath() {
  return (
    <div className="container-fluid page light-page dark-font content">
      <div className="row">
        <div className="col-xl text-center">
          <h1 className="title">
            <strong>
              What is Discrete Math?
            </strong>
          </h1>
          <p className="statement-font-size statement-margins">
            <strong>
              Let&apos;s take a look at what it isn&apos;t, to find out what it is. Mathematics can be broadly
              categorized into two main branches; Continuous and Discrete.
            </strong>
          </p>
        </div>
      </div>
      <div
        id="math-branches-container"
        className="row"
      >
        <div
          id="math-branch-container-one"
          className="col-sm math-branch-container"
        >
          <img
            src={infinityContinuousSymbol}
            alt="Rainbow infinity symbol"
            className="what-is-discrete-math-img"
          />
          <h2 className="what-is-discrete-math-math-branch-text">
            <strong>
              CONTINUOUS MATHEMATICS
            </strong>
          </h2>
          <p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">
            Continuous Mathematics deals with things that change smoothly and continuously. It&apos;s the study of
            situations that have an infinite number of possibilities between two points. An example would be
            describing the continuous change in your position as you move through a city over time.
            <br />
            <br />
            Continuous Mathematics is used to model and analyse phenomena that change continuously such as motion,
            optimization and geometric shapes.
          </p>
        </div>
        <div
          id="math-branch-container-two"
          className="col-sm  math-branch-container"
        >
          <img
            src={vennDiagramDiscreteSymbol}
            alt="Venn diagram with shaded middle"
            className="what-is-discrete-math-img"
          />
          <h2 className="what-is-discrete-math-math-branch-text">
            <strong>
              DISCRETE MATHEMATICS
            </strong>
          </h2>
          <p className="what-is-discrete-math-math-branch-text statement-font-size statement-margins">
            Discrete Mathematics concerns the study of mathematical structures that are distinct and separable. It is
            suited to solving problems with finite or countable possibilities. An example would be finding the
            shortest path from one point to another in a city.
            <br />
            <br />
            Applications include cryptography, combinatorics, and discrete optimization.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xl text-center">
          <p className="statement-font-size statement-margins">
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
