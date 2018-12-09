import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import runSheet from '../../assets/Top_Down_Survivor/feet/run/sheet_run.png';

class Feet extends Component {
    render() {
        return (
            <Spritesheet
                className={'centerOfParent'}
                image={runSheet}
                widthFrame={204}
                heightFrame={124}
                steps={20}
                fps={30}
                autoplay={true}
                loop={true}
                isResponsive={true}
            />
        );
    }
}

export default Feet;
