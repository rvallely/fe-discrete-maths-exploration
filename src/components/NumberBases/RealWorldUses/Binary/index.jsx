import React from 'react';
import BakeryExample from './components/BakeryExample';
import BrailleExample from './components/BrailleExample';
import UpcExample from './components/UpcExample';

function Binary () {
    return <div style={{ paddingBottom: '1%' }}>
        <BakeryExample />
        <p className='text-align-center'>
            <strong>
                Let&apos;s take a look at another example.
            </strong>
        </p>
        <BrailleExample />
        <p className='text-align-center'>
            <strong>
                Now for an every day example.
            </strong>
        </p>
        <UpcExample />
    </div>;
}

export default Binary;
