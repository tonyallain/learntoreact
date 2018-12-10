import React from 'react';
import Spritesheet from '../../utils/Spritesheet';
import sheet from '../../../src/assets/enemies/attack/sheet.png';
import { getVariance } from '../../utils/helpers';

const ZombieAttack = () => {
    const variance = getVariance(15, 2);

    return (
        <Spritesheet
            className={'zombieAttack'}
            image={sheet}
            widthFrame={318}
            heightFrame={294}
            steps={9}
            fps={variance}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default ZombieAttack;
