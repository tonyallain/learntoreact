import React from 'react';
import Spritesheet from '../../../utils/Spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/knife/meleeattack/sheet.png';

const KnifeMelee = () => {
    return (
        <Spritesheet
            className={'knifeAttack'}
            image={sheet}
            widthFrame={329}
            heightFrame={300}
            steps={15}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default KnifeMelee;
