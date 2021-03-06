import React, { Component } from 'react';
import Player from './Player';
import { diagonalRatio, updateInterval } from '../utils/constants';
import { angle } from '../utils/vector';
import Zombie from './Zombie';
import GameLoop from '../utils/game-loop';

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
const TEST_SPAWN_RATE = 100;
const MAX_ZOMBIES = 25;
const MAP_PADDING = 25;
const PLAYER_MOVESPEED = 100;

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.loop = new GameLoop();
        this.state = {
            playerPosition: {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                r: 0
            },
            isMoving: false,
            strafeDirection: 0
        };

        this.zombies = [];
        this.bindings = {
            w: false,
            s: false,
            q: false,
            e: false
        };

        this.lastMousePos = {
            x: 0,
            y: 0
        };

        this.currentWeapon = 3;

        this.onKeyDown.bind(this);
        this.onKeyUp.bind(this);
        this.lookAtCursor.bind(this);
        this.onUpdate.bind(this);
        this.mouseEvent.bind(this);
    }

    onUpdate(deltaTime) {
        // console.log(deltaTime);
        let x = 0;
        let y = 0;
        if (this.bindings.w) {
            y -= PLAYER_MOVESPEED * (deltaTime / 1000);
        }
        if (this.bindings.s) {
            y += PLAYER_MOVESPEED * (deltaTime / 1000);
        }
        if (this.bindings.q) {
            x -= PLAYER_MOVESPEED * (deltaTime / 1000);
        }
        if (this.bindings.e) {
            x += PLAYER_MOVESPEED * (deltaTime / 1000);
        }

        if (x !== 0 && y !== 0) {
            x *= diagonalRatio;
            y *= diagonalRatio;
        }

        let newX = this.state.playerPosition.x + x;
        let newY = this.state.playerPosition.y + y;
        const newRotation = angle(
            {
                x: newX,
                y: newY
            },
            { x: this.lastMousePos.x, y: this.lastMousePos.y }
        );

        let strafeDirection = 0;
        if (newRotation >= -45 && newRotation < 45) {
            // facing right
            if (y < 0) {
                strafeDirection = STRAFE_LEFT;
            } else if (y > 0) {
                strafeDirection = STRAFE_RIGHT;
            }
        } else if (newRotation >= 45 && newRotation < 135) {
            // facing down
            if (x < 0) {
                strafeDirection = STRAFE_RIGHT;
            } else if (x > 0) {
                strafeDirection = STRAFE_LEFT;
            }
        } else if (newRotation >= 135 || newRotation < -135) {
            // facing left
            if (y < 0) {
                strafeDirection = STRAFE_RIGHT;
            } else if (y > 0) {
                strafeDirection = STRAFE_LEFT;
            }
        } else if (newRotation >= -135 && newRotation < -45) {
            // facing up
            if (x < 0) {
                strafeDirection = STRAFE_LEFT;
            } else if (x > 0) {
                strafeDirection = STRAFE_RIGHT;
            }
        }

        if (newX < MAP_PADDING) {
            newX = MAP_PADDING;
        } else if (newX > window.innerWidth - MAP_PADDING) {
            newX = window.innerWidth - MAP_PADDING;
        }

        if (newY < MAP_PADDING) {
            newY = MAP_PADDING;
        } else if (newY > window.innerHeight - MAP_PADDING) {
            newY = window.innerHeight - MAP_PADDING;
        }

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

        if (this.bindings.hasOwnProperty(e.key)) {
            e.preventDefault();
            this.bindings = { ...this.bindings, [e.key]: true };
        } else if (isNumber && isNumber < weapons.length && isNumber > 0) {
            e.preventDefault();
            this.currentWeapon = isNumber;
        }
    }

    onKeyUp(e) {
        if (this.bindings.hasOwnProperty(e.key)) {
            e.preventDefault();
            this.bindings = { ...this.bindings, [e.key]: false };
        }
    }

    lookAtCursor(e) {
        e.preventDefault();
        this.lastMousePos = {
            x: e.clientX,
            y: e.clientY
        };
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

        this.loop.start();
        this.id = this.loop.subscribe(dt => {
            this.onUpdate(dt);
            if (this.zombies.length < MAX_ZOMBIES) {
                this.zombies.push(this.zombies.length);
            }
        });

        // setInterval(() => {
        //     if (this.zombies.length < MAX_ZOMBIES) {
        //         this.zombies.push(this.zombies.length);
        //     }
        // }, TEST_SPAWN_RATE);
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
        this.loop.unsubscribe(this.id);
        this.loop.stop();

        window.removeEventListener('keydown');
        window.removeEventListener('keyup');
        window.removeEventListener('mousemove');
        window.removeEventListener('mouseup');
        window.removeEventListener('contextmenu');
    }

    render() {
        return (
            <div className='canvas'>
                <Player
                    position={this.state.playerPosition}
                    weapon={weapons[this.currentWeapon]}
                    isMoving={this.state.isMoving}
                    strafeDirection={this.state.strafeDirection}
                />
                {this.zombies.map(i => {
                    return (
                        <div key={i}>
                            <Zombie
                                playerPosition={this.state.playerPosition}
                                gameloop={this.loop}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Canvas;
