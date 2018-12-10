import React from 'react';
import Spritesheet from '../../../utils/Spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/rifle/shoot/sheet.png';

const RifleShoot = () => {
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

export default RifleShoot;
