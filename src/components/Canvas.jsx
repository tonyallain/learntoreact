import React, { Component } from 'react';
import Player from './Player';

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerPosition: {
                x: window.innerWidth / 2,
                y: window.innerHeight / -2
            }
        };

        this.handleKey.bind(this);
    }

    handleKey(e) {
        e.preventDefault();
        console.log(e.key);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKey, false);
    }

    render() {
        return (
            <div className='canvas'>
                <Player position={this.state.playerPosition} />
            </div>
        );
    }
}

export default Canvas;
