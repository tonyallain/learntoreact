import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/feet/strafe_left/sheet.png';

const FeetStrafeLeft = () => {
    return (
        <Spritesheet
            className={'strafing'}
            image={sheet}
            widthFrame={155}
            heightFrame={174}
            steps={20}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default FeetStrafeLeft;
