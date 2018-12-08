import React from 'react';
import FeetRun from './FeetRun';
import MoveHandgun from './MoveHandgun';

const Canvas = () => {
    return (
        <div className='canvas'>
            <div className='player'>
                <FeetRun />
                <MoveHandgun />
            </div>
        </div>
    );
};

export default Canvas;
