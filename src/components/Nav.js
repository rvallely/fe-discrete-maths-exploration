import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return ( 
        <div>
            <button className='btn btn-primary' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
            ⇤⇥
            </button>

            <div className='offcanvas offcanvas-start' tabIndex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel' style={{maxWidth: '80%'}}>
                <div className='offcanvas-header'>
                    <h5 className='offcanvas-title mb-0' id='offcanvasExampleLabel'>Discrete Maths</h5>
                    <button type='button' className='btn-close text-reset' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                </div>

                <div className='offcanvas-body'>
                    <a href='' target='_blank' className='m-1 text-decoration-none' style={{color: 'black'}}>Link1</a>
                    <br></br>
                    <a href='' target='_blank' className='m-1 text-decoration-none' style={{color: 'black'}}>Link2</a>
                    <br></br>
                    <Link to='/base-converter' className='m-1 text-decoration-none' style={{color: 'black'}}>Base converter</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;