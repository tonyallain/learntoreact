import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/feet/idle/sheet.png';

const FeetIdle = () => {
    return (
        <Spritesheet
            className={'idleFeet'}
            image={sheet}
            widthFrame={132}
            heightFrame={155}
            steps={1}
            fps={1}
            isResponsive={true}
        />
    );
};

export default FeetIdle;
