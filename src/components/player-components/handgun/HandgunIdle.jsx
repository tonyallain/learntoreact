import React from 'react';
import Spritesheet from '../../../utils/Spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/handgun/idle/sheet.png';

const HandgunIdle = () => {
    return (
        <Spritesheet
            className={'handgun'}
            image={sheet}
            widthFrame={253}
            heightFrame={216}
            steps={20}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default HandgunIdle;
