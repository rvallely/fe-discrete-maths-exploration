import React, { useState } from 'react';
import base4NumberPlateConfused from '../../../assets/numberBases/realWorldUses/base4NumberPlateConfused.png';
import base36NumberPlateHappy from '../../../assets/numberBases/realWorldUses/base36NumberPlateHappy.png';

function VehicleLicensePlates () {
    const [base4NumberPlateAnimated, setBase4NumberPlateAnimated] = useState('unanimated');
    const [base36NumberPlateAnimated, setBase36NumberPlateAnimated] = useState('unanimated');
    const toggleAnimation = (id) => {
        if (id.includes('base-4')) {
            base4NumberPlateAnimated === 'animated'
                ? setBase4NumberPlateAnimated('unanimated')
                : setBase4NumberPlateAnimated('animated');
        }
        if (id.includes('base-36')) {
            base36NumberPlateAnimated === 'animated'
                ? setBase36NumberPlateAnimated('unanimated')
                : setBase36NumberPlateAnimated('animated');
        }
    };

    return <div className='real-world-use-container' style={{ marginLeft: '2%', marginRight: '2%' }}>
        <h2 className='underline'>
            <strong>
                Vehicle License Plates
            </strong>
        </h2>
        <p>
            Vehicle license plates use the hexatridecimal (base 36) system. Using characters 0-9 and
            uppercase A-Z provides a compact representation that can easily fit on a number plate,
            dashboard, door frame, or engine block. Because of its compactness and its use of alphanumeric
            characters, it is an easier system to convey and understand for humans, compared to a number
            system with fewer characters like quaternary (base 4), so fits this application well. Added to
            that, using a number system with a larger character set reduces the likelihood of duplication,
            as the vehicle license plates are intended to be globally unique.
        </p>
        <p>
            Imagine trying to quickly communicate the number plates below and the importance of using the
            correct number system for the application becomes apparent.
        </p>
        <div
            className="row align-contents-center number-base-section-margins"
        >
            <div
                className='drift-in-image-container real-world-use-example rounded-box clickable'
                style={{ marginBottom: '2%' }}
                onClick={() => toggleAnimation('base-4-number-plate')}
            >
                <p
                    className='rounded-box'
                    style={{
                        fontSize: '1.2rem',
                        backgroundColor: 'white',
                        borderWidth: '1px',
                        padding: '2%',
                        marginTop: '2%',
                        width: '20%',
                        position: 'absolute',
                        top: 15,
                        right: 15
                    }}>
                    Click anywhere in this block to toggle the animation of the car and see how easy to it is
                    to take note of the number plate.
                </p>
                <img
                    id='base-4-number-plate'
                    className={base4NumberPlateAnimated}
                    src={base4NumberPlateConfused}>
                </img>
            </div>
            <div
                className='drift-in-image-container real-world-use-example rounded-box clickable'
                onClick={() => toggleAnimation('base-36-number-plate')}
            >
                <p
                    className='rounded-box'
                    style={{
                        fontSize: '1.2rem',
                        backgroundColor: 'white',
                        borderWidth: '1px',
                        padding: '2%',
                        marginTop: '2%',
                        width: '20%',
                        position: 'absolute',
                        top: 15,
                        right: 15
                    }}>
                    Click anywhere in this block to toggle the animation of the car and see how easy to it is
                    to take note of the number plate.
                </p>
                <img
                    id='base-36-number-plate'
                    className={base36NumberPlateAnimated}
                    src={base36NumberPlateHappy}>
                </img>
            </div>
        </div>
    </div>;
}

export default VehicleLicensePlates;
