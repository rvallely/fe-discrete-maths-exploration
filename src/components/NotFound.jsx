import React from 'react';

function NotFound () {
    return (
        <div className="fixed-page light-page dark-font sorting-algorithm-icon-container">
            <div className="center-item">
                <h2 className="title">404: Not Found</h2>
                <h3 className="statement-font-size">Whoops, looks like this page doesn&apos;t exist (yet) &#128579;</h3>
                <p className="statement-font-size">
                    <br />
          Please:
                    <br />
          * check the url you entered is correct
                    <br />
          * refresh the page
                    <br />
          * use the navigation bar to find what you&apos;re looking for
                </p>
            </div>
        </div>
    );
}

export default NotFound;
