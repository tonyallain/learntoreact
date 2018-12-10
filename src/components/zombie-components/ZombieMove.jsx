import React from 'react';
import Spritesheet from '../../utils/Spritesheet';
import sheet from '../../../src/assets/enemies/move/sheet.png';
import { getVariance } from '../../utils/helpers';

const ZombieMove = () => {
    const variance = getVariance(15, 2);

    return (
        <Spritesheet
            className={'zombieMove'}
            image={sheet}
            widthFrame={288}
            heightFrame={311}
            steps={17}
            fps={variance}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default ZombieMove;
