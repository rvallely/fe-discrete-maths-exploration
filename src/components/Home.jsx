import React, { useRef } from 'react';
import zenBalancedStones from '../assets/zen-balanced-stones-cropped.jpg';

function Home() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(`width: ${windowSize.current[0]} height: ${windowSize.current[1]}`);
  const imageAspectRatio = 2560 / 1508;

  const desiredHeight = windowSize.current[0] / imageAspectRatio;

  console.log(Math.floor((windowSize.current[1] / 100) * 20), '<< px down page');
  return (
    <div
      className="home-page-box container-fluid fixed-page page"
      style={{
        backgroundImage: `url(${zenBalancedStones})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `${desiredHeight}px`,
      }}
    >
      <div>
        <h1
          className={`
      light-font
      home-page-title
      position-absolute`}
          style={{
            fontSize: '220px',
            top: '255px',
            left: '50px',
          }}
        >
          <strong>Discrete</strong>
          <br />
          Mathematics
        </h1>
        <p
          className="
          text-center
          light-font
          position-absolute"
          style={{
            fontSize: '64px',
            top: '800px',
            width: '1100px',
            left: '50px',
          }}
        >
          <strong>
            Learn more about the mathematical foundations of computer science.
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Home;
