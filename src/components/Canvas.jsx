import React, { Component } from 'react';
import Player from './Player';
import { diagonalRatio, updateInterval } from '../utils/constants';
import { angle } from '../utils/vector';
import Zombie from './Zombie';

const weapons = [
    'INVENTORY',
    'flashlight',
    'knife',
    'handgun',
    'shotgun',
    'rifle'
];
const STRAFE_LEFT = -1;
const STRAFE_RIGHT = 1;

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerPosition: {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                r: 0
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
            currentWeapon: 3,
            isMoving: false,
            strafeDirection: 0
        };

        this.onKeyDown.bind(this);
        this.onKeyUp.bind(this);
        this.lookAtCursor.bind(this);
        this.onUpdate.bind(this);
        this.mouseEvent.bind(this);
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

        // need to stop the player from moving off screen
        this.setState({
            ...this.state,
            playerPosition: {
                x: newX,
                y: newY,
                r: newRotation
            },
            isMoving: x !== 0 || y !== 0,
            strafeDirection: strafeDirection
        });
    }

    onKeyDown(e) {
        const isNumber = Number(e.key);

        if (this.state.bindings.hasOwnProperty(e.key)) {
            e.preventDefault();
            this.setState({
                ...this.state,
                bindings: { ...this.state.bindings, [e.key]: true }
            });
        } else if (isNumber && isNumber < weapons.length && isNumber > 0) {
            e.preventDefault();
            this.setState({
                ...this.state,
                currentWeapon: isNumber
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

    mouseEvent(e) {
        e.preventDefault();
        console.log(e);
        // try to trigger an anim swap to an attack
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

        window.addEventListener('mouseup', e => {
            this.mouseEvent(e);
        });

        window.addEventListener('contextmenu', e => e.preventDefault());

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
                <Zombie playerPosition={this.state.playerPosition} />
            </div>
        );
    }
}

export default Canvas;
