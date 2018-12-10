import React from 'react';
import Spritesheet from '../../../utils/Spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/shotgun/shoot/sheet.png';

const ShotgunShoot = () => {
    return (
        <Spritesheet
            className={'centerOfParent'}
            image={sheet}
            widthFrame={312}
            heightFrame={206}
            steps={3}
            fps={15}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default ShotgunShoot;
