import React, {useState} from 'react';

function ColourRepresentation(params) {
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

    const toggleColourValues = () => {
        colourSegmentValues.name === 'hex'
        ? setColourSegmentValues(hexAndBinaryColourSegmentValues[1])
        : setColourSegmentValues(hexAndBinaryColourSegmentValues[0]);
    };


    return <div className='real-world-use-container' style={{ marginLeft: '2%', marginRight: '2%' }}>
        <h2 className='underline'>
            <strong>
                Colour Representation in Programming
            </strong>
        </h2>
        <p>
            Hexadecimal (base 16) is used for colour representation in computer programming. Hexadecimal is more compatible with this application than binary for example, because it provides a more compact representation, with each hexadecimal digit representing four binary digits - '1101' in binary is 'D' in hexadecimal.
        </p>
        <p>
            As you can see below, it&apos;s a much more human readable system than binary and therefore is less error prone.
        </p>
        <div className="row align-contents-center number-base-section-margins real-world-use-example rounded-box">
            <div
            id="math-branch-container-one"
            className="col-sm"
            >
            <p
            className='rounded-box'
            style={{
                fontSize: '1.2rem',
                backgroundColor: 'white',
                borderWidth: '1px',
                padding: '2%',
                marginTop: '2%'
            }}>
                Click anywhere on the code block below to toggle between showing the usual hexadecimal colour values and a hypothetical binary representation:
            </p>
            <p
            className="rounded-box clickable"
            style={{
                backgroundColor: '#1E1E1E',
                padding: '4%'
            }}
            onClick={toggleColourValues}
            >
                <span style={{ color: '#D6BA83'}}>#segmented-circle </span>
                <span style={{ color: '#FED841'}}>&#123;</span>
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
            <div id='segmented-circle' className='center-item'>
            </div>
        </div>
    </div>
</div>
}

export default ColourRepresentation;