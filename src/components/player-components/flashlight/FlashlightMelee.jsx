import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/flashlight/meleeattack/sheet.png';

const FlashlightMelee = () => {
    return (
        <Spritesheet
            className={'flashlightAttack'}
            image={sheet}
            widthFrame={316}
            heightFrame={246}
            steps={15}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default FlashlightMelee;
