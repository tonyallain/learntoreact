import React from 'react';
import Spritesheet from '../../../utils/Spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/handgun/move/sheet.png';

const HandgunMove = () => {
    return (
        <Spritesheet
            className={'handgun'}
            image={sheet}
            widthFrame={258}
            heightFrame={220}
            steps={20}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default HandgunMove;
