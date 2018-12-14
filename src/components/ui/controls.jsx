import React from 'react';

const Controls = props => {
    return (
        <div
            style={{
                position: 'fixed',
                left: 0,
                top: window.innerHeight,
                transform: 'translate(0%, -100%)',
                color: 'white'
            }}
        >
            <ul>
                <li>W - UP</li>
                <li>S - DOWN</li>
                <li>E / D - RIGHT</li>
                <li>Q / A - LEFT</li>
                <li>R - Reload</li>
                <li>LMB - Attack</li>
            </ul>
            <ul>
                <li>1 - Flashlight</li>
                <li>2 - Knife</li>
                <li>3 - Handgun</li>
                <li>4 - Shotgun</li>
                <li>5 - Rifle</li>
            </ul>
        </div>
    );
};
export default Controls;
