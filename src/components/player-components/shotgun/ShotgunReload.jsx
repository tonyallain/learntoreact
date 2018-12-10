import React from 'react';
import Spritesheet from '../../../utils/Spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/shotgun/reload/sheet.png';

const ShotgunReload = () => {
    return (
        <Spritesheet
            className={'centerOfParent'}
            image={sheet}
            widthFrame={322}
            heightFrame={217}
            steps={20}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default ShotgunReload;
