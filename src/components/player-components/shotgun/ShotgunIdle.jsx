import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/shotgun/idle/sheet.png';

const ShotgunIdle = () => {
    return (
        <Spritesheet
            className={'shotgun'}
            image={sheet}
            widthFrame={313}
            heightFrame={207}
            steps={20}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default ShotgunIdle;
