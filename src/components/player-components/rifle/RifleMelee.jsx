import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import sheet from '../../../assets/Top_Down_Survivor/rifle/meleeattack/sheet.png';

const RifleMelee = () => {
    return (
        <Spritesheet
            className={'centerOfParent'}
            image={sheet}
            widthFrame={358}
            heightFrame={353}
            steps={15}
            fps={30}
            autoplay={true}
            loop={true}
            isResponsive={true}
        />
    );
};

export default RifleMelee;
