import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import runSheet from '../../assets/Top_Down_Survivor/handgun/move/sheet_move_handgun.png';

class Torso extends Component {
    render() {
        return (
            <Spritesheet
                className={'centerOfParent'}
                image={runSheet}
                widthFrame={258}
                heightFrame={220}
                steps={20}
                fps={30}
                autoplay={true}
                loop={true}
                isResponsive={true}
            />
        );
    }
}

export default Torso;
