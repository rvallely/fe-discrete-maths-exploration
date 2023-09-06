import React, { useRef } from 'react';
import zenBalancedStones from '../assets/zen-balanced-stones-cropped.jpg';
// import NavRevamped from './NavRevamped';
/**
 *
 * @returns  // return (
  //   <div className="home-page-box container-fluid" style={{ height: windowSize.current[1] }}>
  //     <div className="row row-box h-30">
  //       <div className="col">
  //         <h1 className="display-1">Discrete Mathematics</h1>
  //       </div>
  //       <div className="col">
  //         HORIZONTAL NAV
  //       </div>
  //     </div>
  //     <div className="row row-box h-50" style={{ position: 'relative' }}>
  //       <div className="col ">
  //         <h2>Learn more about the mathematical foundations of computer science.</h2>
  //         <br />
  //         <p className="lead">
  //           Discrete Mathematics concerns the study of mathematical structures that are distinct and separable. It is
  //           suited to solving problems with finite or countable possibilities. (give example here)
  //         </p>
  //         <p className="lead">
  //           Applications include cryptography, combinatorics, and discrete optimization.
  //         </p>
  //         <p className="lead">
  //           Continuous Mathematics deals with values that are uncountable and continuous. The values are often
  //           represented by &apos;real&apos; numbers and can take on an infinite number of possible values within a
  //           given range.
  //         </p>
  //         <p className="lead">
  //           Continuous Mathematics is used to model and analyse phenomena that change continuously such as motion,
  //           optimization and geometric shapes.
  //         </p>
  //         <br />
  //         <p className="lead">PRIMARY CALL TO ACTION</p>
  //       </div>
  //       <div className="col h-100 d-inline-block">
  //         <img
  //           src={stackedStones}
  //           className="img-rounded"
  //           alt="Set of pebbles stacked on top of each other to form a tower, on a beach with the sea in the
  background.
  //           The stones signify the discrete objects Discrete Mathematics concerns and stacking them in a tower is a
  //           challenge that requires patience and careful reasoning to create something both powerful and beautiful.
  //           "
  //           style={{ border: 'dashed', borderColor: 'white' }}
  //         />
  //       </div>
  //     </div>
  //     <div
  //       className="row row-box h-20"
  //       // style={{ position: 'relative' }}
  //     >
  //     </div>
  //   </div>
  // );
 */
function Home() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(`width: ${windowSize.current[0]} height: ${windowSize.current[1]}`);
  const imageAspectRatio = 2560 / 1508;

  const desiredHeight = windowSize.current[0] / imageAspectRatio;

  return (
    <div
      className="home-page-box container-fluid"
      style={{
        backgroundImage: `url(${zenBalancedStones})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `${desiredHeight}px`,
      }}
    >
      <h1 className="home-page-font home-page-title">
        <strong>Discrete</strong>
        <br />
        Mathematics
      </h1>
    </div>
  );
}

export default Home;
