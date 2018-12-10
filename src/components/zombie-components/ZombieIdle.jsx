import React from 'react';
import Spritesheet from '../../utils/Spritesheet';
import sheet from '../../../src/assets/enemies/idle/sheet.png';
import { getVariance } from '../../utils/helpers';

const ZombieIdle = () => {
    const variance = getVariance(15, 3);

    return (
        <Spritesheet
            className={'zombieIdle'}
            image={sheet}
            widthFrame={241}
            heightFrame={222}
            steps={17}
            fps={variance}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default ZombieIdle;
