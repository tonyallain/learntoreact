import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/knife/move/sheet.png';

const KnifeMove = () => {
    return (
        <Spritesheet
            className={'knife'}
            image={sheet}
            widthFrame={279}
            heightFrame={219}
            steps={20}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default KnifeMove;
