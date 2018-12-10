import React from 'react';
import Spritesheet from '../../../utils/Spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/shotgun/move/sheet.png';

const ShotgunMove = () => {
    return (
        <Spritesheet
            className={'shotgun'}
            image={sheet}
            widthFrame={313}
            heightFrame={206}
            steps={20}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default ShotgunMove;
