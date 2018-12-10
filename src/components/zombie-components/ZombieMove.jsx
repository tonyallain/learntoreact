import React, { Component } from 'react';
import Spritesheet from '../../utils/Spritesheet';
import sheet from '../../../src/assets/enemies/move/sheet.png';
import { getVariance } from '../../utils/helpers';

class ZombieMove extends Component {
    render() {
        return (
            <Spritesheet
                className={'zombieMove'}
                image={sheet}
                widthFrame={288}
                heightFrame={311}
                steps={17}
                fps={getVariance(15, 2)}
                autoplay={true}
                loop={true}
                gameloop={this.props.gameloop}
            />
        );
    }
}

export default ZombieMove;
