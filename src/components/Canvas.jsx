import React, { Component } from 'react';
import Player from './Player';
import { diagonalRatio, updateInterval } from '../utils/constants';
import { angle } from '../utils/vector';

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerPosition: {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                r: 1
            },
            bindings: {
                w: false,
                s: false,
                q: false,
                e: false
            },
            lastMousePos: {
                x: 0,
                y: 0
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

        const newX = this.state.playerPosition.x + x;
        const newY = this.state.playerPosition.y + y;
        const newRotation = angle(
            {
                x: newX,
                y: newY
            },
            { x: this.state.lastMousePos.x, y: this.state.lastMousePos.y }
        );

        this.setState({
            ...this.state,
            playerPosition: {
                x: newX,
                y: newY,
                r: newRotation
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
        this.setState({
            ...this.state,
            lastMousePos: {
                x: e.clientX,
                y: e.clientY
            }
        });
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
