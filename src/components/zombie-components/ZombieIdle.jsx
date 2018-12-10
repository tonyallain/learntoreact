import React, { Component } from 'react';
import Spritesheet from '../../utils/Spritesheet';
import sheet from '../../../src/assets/enemies/idle/sheet.png';
import { getVariance } from '../../utils/helpers';

class ZombieIdle extends Component {
    render() {
        return (
            <Spritesheet
                className={'zombieIdle'}
                image={sheet}
                widthFrame={241}
                heightFrame={222}
                steps={17}
                fps={getVariance(15, 3)}
                autoplay={true}
                loop={true}
                gameloop={this.props.gameloop}
            />
        );
    }
}

export default ZombieIdle;
