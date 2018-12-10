import React from 'react';
import Spritesheet from '../../../utils/Spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/feet/strafe_right/sheet.png';

const FeetStrafeRight = () => {
    return (
        <Spritesheet
            className={'strafing'}
            image={sheet}
            widthFrame={154}
            heightFrame={176}
            steps={20}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default FeetStrafeRight;
