import React, { Component } from 'react';
import Feet from './player-components/Feet';
import Torso from './player-components/Torso';

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMoving: 1,
            currentPosition: {
                x: window.innerWidth / 2,
                y: window.innerHeight / -2
            },
            moveKeys: {
                up: 'w',
                down: 's',
                left: 'q',
                right: 'e'
            }
        };
    }

    render() {
        return (
            <div
                className='player'
                style={{
                    left: this.state.currentPosition.x,
                    top: -this.state.currentPosition.y
                }}
            >
                <Feet />
                <Torso />
            </div>
        );
    }
}

export default Player;
