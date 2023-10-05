import React, { useState } from 'react';
import ColourRepresentation from './RealWorldUses/ColourRepresentation';
import VehicleLicensePlates from './RealWorldUses/VehicleLicensePlates';
import Binary from './RealWorldUses/Binary/index';

function RealWorldUses() {
    return <div className='container-fluid page light-page dark-font content statement-font-size'>
        <h2 className='title text-align-center'><strong>Real World Uses</strong></h2>
        <ColourRepresentation />
        <VehicleLicensePlates />
        <Binary />
</div>
}

export default RealWorldUses;