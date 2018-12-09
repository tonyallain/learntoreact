import React, { Component } from 'react';
import Player from './Player';
import { diagonalRatio, updateInterval } from '../utils/constants';

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerPosition: {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                r: 15
            },
            bindings: {
                w: false,
                s: false,
                q: false,
                e: false
            }
        };

        this.onKeyDown.bind(this);
        this.onKeyUp.bind(this);
        this.lookAtCursor.bind(this);
        this.onUpdate.bind(this);
    }

    onUpdate() {
        let x = 0;
        let y = 0;
        if (this.state.bindings.w) {
            y -= 1;
        }
        if (this.state.bindings.s) {
            y += 1;
        }
        if (this.state.bindings.q) {
            x -= 1;
        }
        if (this.state.bindings.e) {
            x += 1;
        }

        if (x !== 0 && y !== 0) {
            x *= diagonalRatio;
            y *= diagonalRatio;
        }

        this.setState({
            ...this.state,
            playerPosition: {
                x: this.state.playerPosition.x + x,
                y: this.state.playerPosition.y + y,
                r: this.state.playerPosition.r
            }
        });
    }

    onKeyDown(e) {
        if (this.state.bindings.hasOwnProperty(e.key)) {
            e.preventDefault();
            this.setState({
                ...this.state,
                bindings: { ...this.state.bindings, [e.key]: true }
            });
        }
    }

    onKeyUp(e) {
        if (this.state.bindings.hasOwnProperty(e.key)) {
            e.preventDefault();
            this.setState({
                ...this.state,
                bindings: { ...this.state.bindings, [e.key]: false }
            });
        }
    }

    lookAtCursor(e) {
        e.preventDefault();
        // console.log(e);
    }

    componentDidMount() {
        window.addEventListener('keydown', e => {
            this.onKeyDown(e);
        });
        window.addEventListener('keyup', e => {
            this.onKeyUp(e);
        });
        window.addEventListener('mousemove', e => {
            this.lookAtCursor(e);
        });
        setInterval(() => {
            this.onUpdate();
        }, updateInterval);
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
