import React, { Component } from 'react';
import Spritesheet from '../../utils/Spritesheet';
import sheet from '../../../src/assets/enemies/attack/sheet.png';
import { getVariance } from '../../utils/helpers';

class ZombieAttack extends Component {
    render() {
        return (
            <Spritesheet
                className={'zombieAttack'}
                image={sheet}
                widthFrame={318}
                heightFrame={294}
                steps={9}
                fps={getVariance(15, 2)}
                autoplay={true}
                loop={true}
                gameloop={this.props.gameloop}
            />
        );
    }
}

export default ZombieAttack;
