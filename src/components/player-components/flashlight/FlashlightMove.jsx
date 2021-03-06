import React from 'react';
import Spritesheet from '../../../utils/Spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/flashlight/move/sheet.png';

const FlashlightMove = () => {
    return (
        <Spritesheet
            className={'flashlightMove'}
            image={sheet}
            widthFrame={305}
            heightFrame={231}
            steps={20}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default FlashlightMove;
