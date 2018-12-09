import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import sheet from '../../../src/assets/enemies/move/sheet.png';

const ZombieMove = () => {
    return (
        <Spritesheet
            className={'zombieMove'}
            image={sheet}
            widthFrame={288}
            heightFrame={311}
            steps={17}
            fps={15}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default ZombieMove;
