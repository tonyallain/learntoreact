import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import sheet from '../../../src/assets/enemies/idle/sheet.png';

const ZombieIdle = () => {
    return (
        <Spritesheet
            className={'zombieIdle'}
            image={sheet}
            widthFrame={241}
            heightFrame={222}
            steps={17}
            fps={15}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default ZombieIdle;
