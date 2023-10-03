import React, { useState } from 'react';
import base4NumberPlateConfused from '../../assets/base4NumberPlateConfused.png';
import base36NumberPlateHappy from '../../assets/base36NumberPlateHappy.png'

function RealWorldUses() {
    const hexAndBinaryColourSegmentValues = [
        {
            name: 'hex',
            values: [
                ['#FF0000', '0deg 60deg'],
                ['#FFA500', '60deg 120deg'],
                ['#FFFF00', '120deg 180deg'],
                ['#008000', '180deg 240deg'],
                ['#0000FF', '240deg 300deg'],
                ['#800080', '300deg 360deg'],
            ].map(([colour, degrees]) => ({ colour: colour, degrees: degrees }))
        },
        {
            name: 'binary',
            values: [
                ['111111110000000000000000', '0deg 60deg'],
                ['111111111010010100000000', '60deg 120deg'],
                ['111111111111111100000000', '120deg 180deg'],
                ['1000000000000000', '180deg 240deg'],
                ['11111111', '240deg 300deg'],
                ['100000000000000010000000', '300deg 360deg'],
            ].map(([colour, degrees]) => ({ colour, degrees }))
        },
    ];
    const [colourSegmentValues, setColourSegmentValues] = useState(hexAndBinaryColourSegmentValues[0]);
    const [base4NumberPlateAnimated, setBase4NumberPlateAnimated] = useState('unanimated');
    const [base36NumberPlateAnimated, setBase36NumberPlateAnimated] = useState('unanimated');

    console.log(colourSegmentValues.name, '<<< colour segment value at start')
    const toggleColourValues = () => {
        colourSegmentValues.name === 'hex'
        ? setColourSegmentValues(hexAndBinaryColourSegmentValues[1])
        : setColourSegmentValues(hexAndBinaryColourSegmentValues[0]);
        console.log('the colour segment values are now ', colourSegmentValues.name);
    };

    const toggleAnimation = (id) => {
        console.log('changing animation state for: ', id);
        if (id.includes('base-4')) {
            base4NumberPlateAnimated === 'animated'
            ? setBase4NumberPlateAnimated('unanimated')
            :setBase4NumberPlateAnimated('animated');
        }
        if (id.includes('base-36')) {
            base36NumberPlateAnimated === 'animated'
            ? setBase36NumberPlateAnimated('unanimated')
            : setBase36NumberPlateAnimated('animated');
            }
    }

    return <div className='container-fluid page light-page dark-font content'>
        <h2 className='title text-align-center'><strong>Real World Uses</strong></h2>
        <div className='real-world-use-container'>
            <h2 className='statement-margins underline'>
                <strong>
                Colour Representation in Programming
                </strong>
            </h2>
            <p className='statement-font-size statement-margins'>
            Hexadecimal (base 16) is used for colour representation in computer programming. Hexadecimal is more compatible with this application than say binary, because it provides a more compact representation, with each hexadecimal digit representing four binary digits. For example, '1101' in binary is 'D' in hexadecimal.
            </p>
            <p className='statement-font-size statement-margins'>As you can see below, it&apos;s a much more human readable system than binary and therefore is less error prone.</p>
            <div
            className="row align-contents-center number-base-section-margins real-world-use-example rounded-box"
        >
            <div
            id="math-branch-container-one"
            className="col-sm"
            >
                <p className='rounded-box' style={{ fontSize: '1.2rem', backgroundColor: 'white', borderWidth: '1px', padding: '2%', marginTop: '2%'}}>Click anywhere on the code block below to toggle between showing the usual Hexadecimal colour values and a hypothetical Binary representation:</p>
                <p className="rounded-box clickable" style={{ backgroundColor: '#1E1E1E', padding: '4%'}} onClick={toggleColourValues}>
                <span style={{ color: '#D6BA83'}}>#segmented-circle </span><span style={{ color: '#FED841'}}>&#123;</span>
                <br></br>
                <span style={{ color: '#92CDEC', marginLeft: '4%'}}>width:</span><span style={{ color: '#A1C7AB' }}> 500px</span><span style={{ color: '#D0CBC5'}}>;</span>
                <br></br>
                <span style={{ color: '#92CDEC', marginLeft: '4%'}}>height:</span><span style={{ color: '#A1C7AB' }}> 500px</span><span style={{ color: '#D0CBC5'}}>;</span>
                <br></br>
                <span style={{ color: '#92CDEC', marginLeft: '4%'}}>border-radius:</span><span style={{ color: '#A1C7AB' }}> 1000px</span><span style={{ color: '#D0CBC5'}}>;</span>
                <br></br>
                <span style={{ color: '#92CDEC', marginLeft: '4%'}}>background:</span><span style={{ color: '#DCDC9E' }}> conic-gradient</span><span style={{ color: '#CA72D1' }}>(</span>
                <br></br>
                {colourSegmentValues.values.map(({ colour, degrees }) => {
                    return <div>
                        <span style={{ color: '#CD8757', marginLeft: '8%'}}>{colour}</span><span style={{ color: '#A1C7AB' }}> {degrees}</span><span style={{ color: '#D0CBC5' }}>,</span>
                    </div>
                })}
                <span style={{ color: '#CA72D1', marginLeft: '4%' }}>)</span><span style={{ color: '#D0CBC5' }}>;</span>
                <br></br>
                <span style={{ color: '#FED841'}}>&#125;</span>
            </p>
            </div>
            <div
            id="math-branch-container-two"
            className="col-sm"
            >
            <div id='segmented-circle' className='center-item'></div>
            </div>
        </div>
            
            

        </div>
        <div className='real-world-use-container'>
            <h2 className='statement-margins underline'>
                <strong>
                Vehicle License Plates
                </strong>
            </h2>
            <p className='statement-font-size statement-margins'>
            Vehicle license plates use the Hexatridecimal (base 36) system. Using characters 0-9 and uppercase A-Z provides a compact representation that can easily fit on a number plate, dashboard, door frame, or engine block. Because of its compactness and its use of alphanumeric characters, it is an easier system to convey and understand for humans, compared to a lower number system like Quaternary (base 4), so fits this application well. Added to that, using a number system with a larger character set reduces the likelihood of duplication, as the vehicle license plates are intended to be globally unique.
            </p>
            <p className='statement-font-size statement-margins'>Imagine trying to quickly communicate the number plates below and the importance of using the correct number system for the application becomes apparent.</p>
            <div
            className="row align-contents-center number-base-section-margins"
            style={{ marginLeft: '2%', marginRight: '2%' }}
        >
            <div className='drift-in-image-container real-world-use-example rounded-box clickable' style={{ marginBottom: '2%' }} onClick={() => toggleAnimation('base-4-number-plate')}>
            <p className='rounded-box' style={{ fontSize: '1.2rem', backgroundColor: 'white', borderWidth: '1px', padding: '2%', marginTop: '2%', width: '20%', position: 'absolute', top: 15, right: 15}}>Click anywhere in this block to toggle the animation of the car and see how easy to it is to take note of the number plate.</p>
            <img id='base-4-number-plate' className={base4NumberPlateAnimated} src={base4NumberPlateConfused}></img>
            </div>
            <div className='drift-in-image-container real-world-use-example rounded-box clickable'  onClick={() => toggleAnimation('base-36-number-plate')}>
            <p className='rounded-box' style={{ fontSize: '1.2rem', backgroundColor: 'white', borderWidth: '1px', padding: '2%', marginTop: '2%', width: '20%', position: 'absolute', top: 15, right: 15}}>Click anywhere in this block to toggle the animation of the car and see how easy to it is to take note of the number plate.</p>
            <img id='base-36-number-plate' className={base36NumberPlateAnimated} src={base36NumberPlateHappy}></img>
            </div>
        </div>
            
            

        </div>        <div className='real-world-use-container'>
            <h2 className='statement-margins underline'>
                <strong>
                Communication with Computers
                </strong>
            </h2>
            <p className='statement-font-size statement-margins'>
                When it comes down to it, every iteraction with a computer ends up in binary format. It's the only languge they understand. The binary system as its name would suggest consists of two characters, 0 and 1. These are called binary digits. In the late 1940s American mathematician John Wilder Tukey realised the words binary and digit were likely to become more widely used as computers became more established, so decided to coin a shorter term. He considered bigit and binit, but ultimately settled on bit. 
            </p>
            <p className='statement-font-size statement-margins'>
                So, what is a bit? Well in its simplest form it is a Yes or a No. A more rounded answer would be to say bits are the building blocks of computed information. A bit is the smallest amount of information possible. Any less than a bit would be no information at all. Bits or binary digits bridge the gap between arithmetic and electricity, software and hardware, and ultimately humans and computers. So they're pretty important.
            </p>
            <p className='statement-font-size statement-margins'>Take a look at some examples below to start getting to grips with binary data and its vital role in computing information.</p>
            <div
            className="row align-contents-center number-base-section-margins"
            style={{ border: 'solid black'}}
        >
            <div className='drift-in-image-container real-world-use-example rounded-box' style={{ border: 'solid blue' }} onClick={() => toggleAnimation('base-4-number-plate')}>
            <img id='base-4-number-plate' className={base4NumberPlateAnimated} src={base4NumberPlateConfused}></img>
            </div>
            <div className='drift-in-image-container real-world-use-example rounded-box' style={{ border: 'solid blue' }}  onClick={() => toggleAnimation('base-36-number-plate')}>
            <img id='base-36-number-plate' className={base36NumberPlateAnimated} src={base36NumberPlateHappy}></img>
            </div>
        </div>
            
            

        </div>
        {/* <div className='real-world-use-container'>
            <h2 className='statement-margins underline'>
                <strong>
                Colour Representation in Programming
                </strong>
            </h2>
            <p className='statement-font-size statement-margins'>
            Hexadecimal (base 16) is used for colour representation in computer programming. Hexadecimal is more compatible with this application than say binary or decimal because it provides a more compact representation, as each hexadecimal digit represents four binary digits. For example, '1101' in binary becomes 'D' in hexadecimal.
            </p>
            <p className='statement-font-size statement-margins'>It&apos;s a much more human readable system than say binary and therefore is less error prone.</p>
            <div className='circle' style={{ backgroundColor: '#FF6666'}}></div>
            <div className='circle' style={{ backgroundColor: '#CC66FF'}}></div>

        </div>
        <div className='real-world-use-container'>
            <h2 className='statement-margins underline'>
                <strong>
                Colour Representation in Programming
                </strong>
            </h2>
            <p className='statement-font-size statement-margins'>
            Hexadecimal (base 16) is used for colour representation in computer programming. Hexadecimal is more compatible with this application than say binary or decimal because it provides a more compact representation, as each hexadecimal digit represents four binary digits. For example, 1101 in binary becomes D in hexadecimal.
            </p>
            <p className='statement-font-size statement-margins'>It&apos;s a much more human readable system than say binary and therefore is less error prone.</p>
            <div className='circle' style={{ backgroundColor: '#FF6666'}}></div>
            <div className='circle' style={{ backgroundColor: '#CC66FF'}}></div>

        </div>
        <div className='real-world-use-container'>
            <h2 className='statement-margins underline'>
                <strong>
                Vehicle Registration Plates
                </strong>
            </h2>
            <p className='statement-font-size statement-margins'>
            Hexadecimal (base 16) is used for colour representation in computer programming. Hexadecimal is more compatible with this application than say binary or decimal because it provides a more compact representation, as each hexadecimal digit represents four binary digits. For example, 1101 in binary becomes D in hexadecimal.
            </p>
            <p className='statement-font-size statement-margins'>It&apos;s a much more human readable system than say binary and therefore is less error prone.</p>
            <div className='circle' style={{ backgroundColor: '#FF6666'}}></div>
            <div className='circle' style={{ backgroundColor: '#CC66FF'}}></div>

        </div> */}
    {/* <div id="segmented-circle" onClick={(e) => console.log(e.target.style)}> */}
        
        {/* <div id='red' className="segment red-segment" onClick={() => console.log()}>
            hello
        </div>
        <div id='orange' className="segment orange-segment"></div>
        <div id='yellow' className="segment yellow-segment"></div>
        <div id='green' className="segment green-segment"></div>
        <div id='blue' className="segment blue-segment"></div>
        <div id='purple' className="segment purple-segment"></div> */}
    {/* </div> */}
</div>
}

export default RealWorldUses;