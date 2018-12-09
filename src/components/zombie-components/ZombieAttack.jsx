import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import sheet from '../../../src/assets/enemies/attack/sheet.png';

const ZombieAttack = () => {
    return (
        <Spritesheet
            className={'zombieAttack'}
            image={sheet}
            widthFrame={318}
            heightFrame={294}
            steps={9}
            fps={15}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default ZombieAttack;
