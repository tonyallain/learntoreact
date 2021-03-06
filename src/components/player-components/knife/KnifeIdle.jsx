import React from 'react';
import Spritesheet from '../../../utils/Spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/knife/idle/sheet.png';

const KnifeIdle = () => {
    return (
        <Spritesheet
            className={'knife'}
            image={sheet}
            widthFrame={289}
            heightFrame={224}
            steps={20}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default KnifeIdle;
