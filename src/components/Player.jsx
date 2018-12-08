import React, { Component } from 'react';
import Feet from './player-components/Feet';
import Torso from './player-components/Torso';

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMoving: 1
        };
    }

    render() {
        return (
            <div
                className='player'
                style={{
                    left: this.props.position.x,
                    top: -this.props.position.y
                }}
            >
                <Feet />
                <Torso />
            </div>
        );
    }
}

export default Player;
