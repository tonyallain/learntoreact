import React, { Component } from 'react';
import Player from './Player';
import { diagonalRatio, updateInterval } from '../utils/constants';
import { angle } from '../utils/vector';

const weapons = ['flashlight', 'knife', 'handgun', 'shotgun', 'rifle'];
const STRAFE_LEFT = -1;
const STRAFE_RIGHT = 1;
let updating = false;

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
            },
            currentWeapon: 4,
            isMoving: false,
            strafeDirection: 0
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
            y -= 0.5;
        }
        if (this.state.bindings.s) {
            y += 0.5;
        }
        if (this.state.bindings.q) {
            x -= 0.5;
        }
        if (this.state.bindings.e) {
            x += 0.5;
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

        let strafeDirection = 0;
        if (newRotation > -45 && newRotation < 45) {
            // facing right
            if (y < 0) {
                strafeDirection = STRAFE_LEFT;
            } else if (y > 0) {
                strafeDirection = STRAFE_RIGHT;
            }
        } else if (newRotation > 45 && newRotation < 135) {
            // facing down
            if (x < 0) {
                strafeDirection = STRAFE_RIGHT;
            } else if (x > 0) {
                strafeDirection = STRAFE_LEFT;
            }
        } else if (newRotation > 135 || newRotation < -135) {
            // facing left
            if (y < 0) {
                strafeDirection = STRAFE_RIGHT;
            } else if (y > 0) {
                strafeDirection = STRAFE_LEFT;
            }
        } else if (newRotation > -135 && newRotation < -45) {
            // facing up
            if (x < 0) {
                strafeDirection = STRAFE_LEFT;
            } else if (x > 0) {
                strafeDirection = STRAFE_RIGHT;
            }
        }

        if (!updating) {
            updating = true;
            this.setState(
                {
                    ...this.state,
                    playerPosition: {
                        x: newX,
                        y: newY,
                        r: newRotation
                    },
                    isMoving: x !== 0 || y !== 0,
                    strafeDirection: strafeDirection
                },
                () => {
                    updating = false;
                }
            );
        }
    }

    onKeyDown(e) {
        if (this.state.bindings.hasOwnProperty(e.key) && !updating) {
            e.preventDefault();
            updating = true;
            this.setState(
                {
                    ...this.state,
                    bindings: { ...this.state.bindings, [e.key]: true }
                },
                () => {
                    updating = false;
                }
            );
        }
    }

    onKeyUp(e) {
        if (this.state.bindings.hasOwnProperty(e.key) && !updating) {
            e.preventDefault();
            updating = true;
            this.setState(
                {
                    ...this.state,
                    bindings: { ...this.state.bindings, [e.key]: false }
                },
                () => {
                    updating = false;
                }
            );
        }
    }

    lookAtCursor(e) {
        if (!updating) {
            e.preventDefault();
            updating = true;
            this.setState(
                {
                    ...this.state,
                    lastMousePos: {
                        x: e.clientX,
                        y: e.clientY
                    }
                },
                () => {
                    updating = false;
                }
            );
        }
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
                <Player
                    position={this.state.playerPosition}
                    weapon={weapons[this.state.currentWeapon]}
                    isMoving={this.state.isMoving}
                    strafeDirection={this.state.strafeDirection}
                />
            </div>
        );
    }
}

export default Canvas;
