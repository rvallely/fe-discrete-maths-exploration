import React from 'react';
import zenBalancedStones from '../assets/zen-balanced-stones-cropped.jpg';

function Home() {
  return (
    <div
      className="home-page-box container-fluid fixed-page page"
      style={{
        backgroundImage: `url(${zenBalancedStones})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <h1
          id="home-page-title"
          className={`
      light-font
      position-absolute`}
        >
          <strong>Discrete</strong>
          <br />
          Mathematics
        </h1>
        <p
          id="home-page-statement"
          className="
          text-center
          light-font
          position-absolute
          "
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
