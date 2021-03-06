import React from 'react';
import Spritesheet from '../../../utils/Spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/flashlight/idle/sheet.png';

const FlashlightIdle = () => {
    return (
        <Spritesheet
            className={'flashlightMove'}
            image={sheet}
            widthFrame={303}
            heightFrame={223}
            steps={20}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default FlashlightIdle;
